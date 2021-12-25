//import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Baordingbg from '../components/Board2BG'
import React, { Component } from 'react';


export default function Boardtwo({ navigation }) {
    return (
        <Baordingbg>
            
                    <TouchableOpacity style={styles.container}
                        onPress={() => navigation.navigate('AuthLoadingScreen')}
                    >
                        <Image
                            style={{ width: 30, height: 30, borderRadius: 200 }}
                            source={require('../assets/tick.png')} />
                    </TouchableOpacity>
            
        </Baordingbg>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignSelf:"flex-end",
         marginBottom:10, 
        // alignItems: 'flex-end',
         justifyContent: 'flex-end',
    },

});