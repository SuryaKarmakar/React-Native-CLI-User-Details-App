import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailsScreen from './components/DetailsScreen';
import FlatListCom from './components/FlatListCom';

const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='FlatListCom'
          component={FlatListCom}
          options={{
            headerStyle :{
              backgroundColor: '#1b262c',
              height:70
            },
            headerTintColor: '#ff5050',
            headerTitleStyle:{
              fontWeight: 'bold',
            },
            headerTitle:"User Name"

          }}/>

          <Stack.Screen
          name='DetailsScreen'
          component={DetailsScreen}
          options={{
            headerStyle :{
              backgroundColor: '#1b262c',
              height:70
            },
            headerTintColor: '#ff5050',
            headerTitleStyle:{
              fontWeight: 'bold',
            },
            headerTitle:"User Details "

          }}/>

      </Stack.Navigator>
    </NavigationContainer>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item : {
    marginTop:24,
    padding:30,
    backgroundColor:'tomato',
    fontSize:24
  }
});
