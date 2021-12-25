//import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Baordingbg from '../components/Board1BG'
import React, { Component } from 'react';

class Boardone extends React.Component {
    render() {
        return (
            <Baordingbg>
                        <TouchableOpacity style={styles.container}
                           onPress={() => this.props.navigation.navigate('Board2')}
                        >
                            <Image
                                style={{ width: 35, height: 35, borderRadius: 200 }}
                                source={require('../assets/tick.png')} />
                        </TouchableOpacity>           
            </Baordingbg>
        );
    }
}

export default Boardone;
const styles = StyleSheet.create({
    container: {
        flex: 1,  
        alignSelf:"flex-end",
         marginBottom:10, 
        // alignItems: 'flex-end',
         justifyContent: 'flex-end',
    },
    
});