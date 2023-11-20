import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState, useRef } from 'react';
import { BackHandler, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import firebase from '../config';


export default function Auth(props) {
  const auth = firebase.auth();
    const [email, setEmail] = useState('ahmed.godbani.96@gmail.com');
    const [pwd,setPwd] = useState('123456');
    const refinput2 = useRef();
    const navigation = useNavigation();
    
  return (
    <ImageBackground 
      source={require("../assets/img.jpg")}
      style={styles.container}
      >
        <View
        style={{
            width: "90%",
            height: 350,
            borderRadius: 20,
            backgroundColor:'#0003',
            alignItems: 'center',
            justifyContent: 'center',
        }}
        >
        <Text 
        style={{
            fontSize: 32,
            color: "white",
            fontStyle: "italic",
            fontWeight: "bold",
            marginBottom: 15,
        }}
        >
      Authentification</Text>
      <TextInput 
        onSubmitEditing={()=>{ refinput2.current.focus();}}
        blurOnSubmit={false}
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        style={styles.textinput} placeholder="Email"  ></TextInput>
      
      <TextInput 
        ref={refinput2}
        secureTextEntry={true} onChangeText={text => setPwd(text)}
        style={styles.textinput} placeholder="Password"></TextInput>
      <View style={{ flexDirection: 'row'}} >
      <Button style={styles.btn} onPress={()=>{
           
                auth.signInWithEmailAndPassword(email, pwd)
                .then(()=>{
                    // navigation
                    props.navigation.navigate('Accueil', {name:email, password:pwd});
                })
                .catch((err)=>{alert(err);});
            
      }} title='Log in'>Log in</Button>
        <Button style={styles.btn} onPress={()=>{
          BackHandler.exitApp()
          //fermer l'application
        }} title='Cancel'>Cancel</Button>
      </View>
      
      <TouchableOpacity style={{
        paddingRight: 10,
        width: "100%",
        alignItems: "flex-end",
        marginTop: 10,
      }}>
      <Text 
        onPress={()=>{
          navigation.navigate("CreateUser")
        }}
        style={{
        color: '#fff',
        fontWeight: "bold",
      }}>Create account {email}</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
      </View>
    </ImageBackground>
  );

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
    width: "70%",
    height: 60,
  },
  btn: {
    backgroundColor: "#9BBEC8",
    margin: 2,
    width: 110,
  }
});