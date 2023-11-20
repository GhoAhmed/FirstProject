import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';
import firebase from '../config';

export default function MyProfile() {
    const database = firebase.database();
  return (
    <ImageBackground 
    source={require("../assets/img.jpg")}
    style={styles.container}>
      <Text style={styles.text} >My Profile</Text>
      <Image style={styles.image} source={require('../assets/avatar.jpg')} />
    <TextInput 
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Name'></TextInput>
    <TextInput 
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Last Name'></TextInput>
    <TextInput 
    style={styles.textinput}
    blurOnSubmit={false}
    placeholder='Phone Number'></TextInput>
    <TouchableOpacity style={styles.btn}
        onPress={ ()=>{
        const ref_profile = database.ref("MyProfile")
        ref_profile.set({
            "Nom" : fname,
            "Prenom" : lname,
            "Tel" : tel
        });
    }}
    ><Text>Validate</Text></TouchableOpacity>
    
            
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