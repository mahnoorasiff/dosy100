import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, ImageBackground } from 'react-native';
//import { Constants } from 'expo';
import Constants from 'expo-constants';
const { width } = Dimensions.get('window');

export default MSarticles = ({ route, navigation }) => {

  return (

    <View style={styles.container} >
        
<ImageBackground
                    style={styles.bgView}
                    source={{uri:route.params?.articleurl}}>
                        
</ImageBackground>

</View>

  
)
}


const styles = StyleSheet.create({
    paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    },
    scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
   // borderColor: 'black',
    backgroundColor: 'white'
    },
    contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
    },
    bgView: {
        width: "101%",
        height: "100%",
        

    },
    
    container: {
        height:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 0,
        backgroundColor: 'beige'


    }
})
    