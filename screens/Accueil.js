import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Groupe from './Groupe';
import ListProfile from './ListProfile';
import MyProfile from './MyProfile';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



export default function Accueil({ route }) {

  const Tab = createMaterialBottomTabNavigator();

    const { name } = route.params;
    const { password } = route.params;
    
  return (
    
    <Tab.Navigator>
      <Tab.Screen name='MyProfile' component={MyProfile}/>
      <Tab.Screen name='Groupe' component={Groupe}/>
      <Tab.Screen name='ListProfile' component={ListProfile}/>
    </Tab.Navigator>
  
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