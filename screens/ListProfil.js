import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import firebase from '../config'
import { useEffect, useState } from 'react'
import { FlatList,Image,TouchableOpacity } from 'react-native'

const ListeProfile = () => {
  const database = firebase.database()
  const ref_profils = database.ref("Profils")
  const [data, setData] = useState([])

  useEffect(() => {
    ref_profils.on('value', (snapshot) => {
      let d = []
      snapshot.forEach((child) => {
        d.push(child.val())
      })
      setData(d)

    })
  
    return () => {
      ref_profils.off('value')
    }
  }, [])
  

return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Profils</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/avatar.jpg')}
              style={styles.profileImage}
            />

            <View style={styles.textContainer}>
              <Text style={styles.label}>
                {`Nom: `}
                <Text style={styles.value}>{item.nom}</Text>
              </Text>

              <Text style={styles.label}>
                {`Prenom: `}
                <Text style={styles.value}>{item.prenom}</Text>
              </Text>

              <Text style={styles.label}>
                {`Telephone: `}
                <Text style={styles.value}>{item.telephone}</Text>
              </Text>

              {/* Add more fields as needed */}
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() =>null}>
                  <Image
                    source={require('../assets/call.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => null }>
                  <Image
                    source={require('../assets/message.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ListeProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,

    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    marginTop: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileContainer: {
    flexDirection: 'row', // Align children horizontally
    alignItems: 'center', // Align children vertically

    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Assuming the image is a circle
    marginRight: 10,
  },
  textContainer: {
    flex: 1, // Take remaining space in the row
  },
  // profileContainer: {
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 8,
  //   padding: 16,
  //   marginBottom: 16,
  //   elevation: 3,
  // },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
    color: '#666666',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
});