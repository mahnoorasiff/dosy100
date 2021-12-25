import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import MyStack from './stacknav';
import { NavigationContainer } from '@react-navigation/native';


// Initialize Firebase
// firebase.initializeApp(config);

if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}


export default function PhotoFeed(props) {


  return (
    
       <MyStack />
    
  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
