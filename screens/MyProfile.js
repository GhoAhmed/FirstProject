import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import firebase from '../config';
import * as ImagePicker  from "expo-image-picker";

export default function Profils() {
    const [nom,setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [num, setNum] = useState();

    const [defaultImage, setDefaultImage] = useState(true);
    const [urlImage, setUrlImage] = useState();

    const database = firebase.database();

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // console.log(result);
  
      if (!result.canceled) {
        setDefaultImage(false);
        setUrlImage(result.assets[0].uri);
      }
    };
    const imageToBlob = async (uri) => {
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function (e) {
          console.log(e);
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob"; //bufferArray
        xhr.open("GET", uri, true);
        xhr.send(null);
      });
      return blob;
    };

    const uploadImageLocalToFirebaseStorage = async (uriLocal) => {
      // convertir l'image to blob
      const blob = await imageToBlob(uriLocal);
      // upload blob to firebase storage
      const storage = firebase.storage();
      const ref_mesimages = storage.ref("Mesimages");
      const ref_image = ref_mesimages.child("image.jpg");

      ref_image.put(blob);
      // recuperer l'url
      const url = ref_image.getDownloadURL();
      return url;
    }

  return (
    <ImageBackground 
    source={require("../assets/img.jpg")}
    style={styles.container}>
      <Text style={styles.text} >My Profile</Text>
      <TouchableOpacity onPress={()=>
      {
        pickImage()
      }}>
      <Image style={styles.image} source={defaultImage ? require('../assets/avatar.png'): {uri:urlImage}} />
      </TouchableOpacity>
    <TextInput 
    onChangeText={text => setNom(text)}
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Name'></TextInput>
    <TextInput 
    onChangeText={text => setPrenom(text)}
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Last Name'></TextInput>
    <TextInput 
    onChangeText={text => setNum(text)}
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Phone Number'></TextInput>
     <Button style={styles.btn}
    onPress={async()=>{
      const ref_profils = database.ref("Profils")
      const key = ref_profils.push().key
      const ref = ref_profils.child("profil"+key)
      const url = await uploadImageLocalToFirebaseStorage(urlImage,key)

      ref.set({
        nom:nom,
        prenom:prenom,
        numero:num,
        url:url
      })
    }}
    >Validate</Button>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#005',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textinput: {
          marginBottom: 5,
          backgroundColor: '#fff5',
          width: 200,
          height: 60,
      },
      text: {
        fontWeight: "bold",
          textAlignVertical: 'center',
          color: '#fff',
          marginBottom: 10,
          
      },
      btn: {
          backgroundColor: "#9BBEC8",
          margin: 2,
          width: 110,
        },
      image: {
            width: 100,
            height: 100,
            marginBottom: 10,
        }
})