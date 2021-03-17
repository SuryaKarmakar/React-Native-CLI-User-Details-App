import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';

// Movie Details Screen ...........................................................
function DetailsScreen({ route, navigation }) {

    const {title, releaseYear, phone, website } = route.params;
    const image = { uri: "https://i.pinimg.com/736x/24/e9/d9/24e9d9fe3469d58936be626c7781bf0c.jpg" };
    return (
      <View style={styles.container}>

        <View style={styles.profile}>
          <Image
            style={styles.tinyLogo}
            source={{uri: 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'}}
          />
          <Text style={{color:'white', marginLeft:10,  }}>User Name</Text>
        <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        value={title}
      />
    <Text style={{color:'white', marginLeft:10}}>Email</Text>
      <TextInput
      style={styles.input}
      // onChangeText={onChangeNumber}
      value={releaseYear}
    />
  <Text style={{color:'white', marginLeft:10}}>Phone No</Text>
    <TextInput
    style={styles.input}
    // onChangeText={onChangeNumber}
    value={phone}
    />
  <Text style={{color:'white', marginLeft:10}}>Website</Text>
      <TextInput
      style={styles.input}
      // onChangeText={onChangeNumber}
      value={website}
      />
        </View>
      </View>
    );
  }

  export default DetailsScreen;
  const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#ffcccc',
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor:'#0E1013'
     },
     item : {
       flex: 1,
       flexDirection: "row",
       marginTop:10,
       padding:20,
       backgroundColor:'#1b262c',
       fontSize:24,
       borderRadius:20
     },
     profile:{
        backgroundColor:'#1b262c',
        padding:20,
        borderRadius:20,
        margin:30,
     },
     input: {
      width:300,
      height: 60,
      margin: 10,
      borderWidth: 1,
      color:'#ff5050',
      padding:10,
      fontSize:20,
      fontWeight:'bold',
      borderRadius:15,
      backgroundColor:'#0E1013',
      borderColor: '#ff5050',

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  tinyLogo: {
  width: 100,
  height: 100,
  borderRadius:80,
  backgroundColor:'white',
  marginLeft:105
}
   });
