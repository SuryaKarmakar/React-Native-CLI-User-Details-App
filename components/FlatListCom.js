import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';

// FlatList + API ....................................................................
export default class FlatListCom extends Component {

  constructor(props) {

  super(props);

  this.state = {
    isLoading: true,
    text: '',
    data: []
  }

  this.arrayholder = [];
}

componentDidMount() {

return fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log(responseJson);
    this.setState({
      isLoading: false,
      data: responseJson,
    }, () => {
      // In this block you can do something with new state.
      this.arrayholder = responseJson;
    });
  })
  .catch((error) => {
    console.error(error);
  });
}

GetFlatListItem(name) {
Alert.alert(name);
}

emptyComponent= () => {
    return(
    <View style={{flex: 1}}>
      <Text style={styles.titleStyle}>oops! keyword not match !</Text>
    </View>);
  }

searchData(text) {
   const newData = this.arrayholder.filter(item => {
     const itemData = item.name.toUpperCase();
     const textData = text.toUpperCase();
     return itemData.indexOf(textData) > -1
   });

   this.setState({
     data: newData,
     text: text
     })
   }

   itemSeparator = () => {
     return (
       <View
         style={{
           height: .5,
           width: "100%",
           backgroundColor: "#000",
         }}
       />
     );
   }

   ascendingList = () =>{
     const {data} = this.state;
     this.setState({
       data : data.sort((a, b) => (a.name > b.name) ? 1 : -1)
     })
   }

   descendingList = () => {
     const {data} = this.state;
     this.setState({
       data : data.sort((a, b) => (a.name < b.name) ? 1 : -1)
     })
   }
    render() {

      const { data, isLoading } = this.state;

      if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }

        return (

          <View style={{ flex: 1, padding: 18, backgroundColor:'#0E1013' }}>

            <View style={{flexDirection: "row"}}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.ascendingList}
              >
                <Text style={styles.AtoZ}>A - Z</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={this.descendingList}
              >
                <Text style={styles.AtoZ}>Z - A</Text>
              </TouchableOpacity>
              <TextInput
               style={styles.textInput}
               onChangeText={(text) => this.searchData(text)}
               value={this.state.text}
               underlineColorAndroid='transparent'
               placeholder="Search Here"
               placeholderTextColor="#ff5050" />
            </View>



           <FlatList
               data={data}
               ListEmptyComponent={this.emptyComponent}
               keyExtractor={({ id }, index) => id}

               renderItem={({ item }) => (
                 // <TouchableOpacity onPress={() => this.pressHandler(item.id)}>
                 <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailsScreen',{
                   title: item.name,
                   releaseYear : item.email,
                   phone:item.phone,
                   website:item.website

                 })}>
               <View style={styles.item}>
                 <Image
                   style={styles.tinyLogo}
                   source={{uri: 'https://cdn1.iconfinder.com/data/icons/instagram-ui-colored/48/JD-18-512.png'}}
                 />
               <Text style={{color:'#ff5050', fontWeight:'bold', fontSize:18, marginTop:25, paddingLeft:8}}>
                   {item.name}
                 </Text>
               </View>

                 </TouchableOpacity>
               )}

             />

        </View>
      );
    }
  };

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffcccc',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item : {
      flex: 1,
      flexDirection: "row",
      marginTop:10,
      padding:20,
      backgroundColor:'#1b262c',
      fontSize:20,
      borderRadius:20
    },
    tinyLogo: {
    width: 80,
    height: 80,
    borderRadius:80,
    backgroundColor:'white'
  },
  textInput: {

    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#ff5050',
    borderRadius: 8,
    backgroundColor:'#1b262c',
    color: '#ff5050',
    width:200,
    marginLeft:3,
    textAlign: 'center'
  },
  button: {
   alignItems: "center",
   backgroundColor: "#1b262c",
   padding:5,
   width:50,
   margin:5,
   height:35,
   borderRadius:8

 },
 AtoZ:{
   color:'#ff5050'
 },
 titleStyle: {
  color: '#ff5050',
  marginLeft:130,
  padding:5,
  fontSize:15
  }
  });
