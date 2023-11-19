import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Accueil({ route }) {
    const { name } = route.params;
    const { password } = route.params;
  return (
    <ImageBackground 
    source={require("../assets/img.jpg")}
    style={styles.container}>
    <View>
      <Text style={styles.text}>Email : {name}</Text>
      <Text style={styles.text}>Password : {password} </Text>
    </View>
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
            width: "65%",
            height: 60,
        },
        text: {
            textAlignVertical: 'center',
            color: '#fff',
            
        },
        btn: {
            backgroundColor: "#9BBEC8",
            margin: 2,
            width: 110,
          }
})