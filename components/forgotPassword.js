import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

import * as Font from 'expo-font';


class ForgotPassword extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  // UNSAFE_componentWillMount = async () => {    
  //   await Font.loadAsync({
  //     LatoRegular: require('../../../assets/fonts/Lato-Regular.ttf'),
  //     LatoSemibold: require('../../../assets/fonts/Lato-Semibold.ttf'),
  //     LatoBold: require('../../../assets/fonts/Lato-Bold.ttf'),
  //     RalewaySemiBold: require('../../../assets/fonts/Raleway-SemiBold.ttf'),
  //   });
  //   this.setState({fontsLoaded: true});
  // }

  render(){

    
        return(
        <View style = {styles.background}>
            <ScrollView style = {styles.mainView} showsVerticalScrollIndicator = {false}>

                <TextInput style = {[styles.textInput, {marginTop: '20%'}]} 
                placeholderTextColor = '#9D9D9D' placeholder = 'Email *'/>

                <View style = {styles.buttonView}>
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('LoginScreen')}
                   style = {styles.button}>
                      <Text style = {styles.buttonText}>RESET</Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        );
    
      }
}



const styles = StyleSheet.create({
  background: {
      backgroundColor: '#FFFFFF', 
      height: '100%'
  },
  backgroundB: {
      backgroundColor: '#FFFFFF', 
      height: '100%',
      justifyContent: 'center'
  },
  mainView:{
      width: '90%', 
      alignSelf: 'center'
  },
  textInput:{
      marginTop: '7%', 
      fontFamily: 'LatoBold', 
      fontSize: 14, 
      color: '#112D46', 
      letterSpacing: 0.8, 
      borderBottomColor: '#9D9D9D57', 
      borderBottomWidth: 1,
      paddingVertical: '2%'
  },
  buttonView: {
      marginTop: '15%', 
      height: 55, 
      flexDirection: 'row'
  },
  button:{
      flex: 1,  
      height: '100%', 
      backgroundColor: '#112D46', 
      justifyContent: 'center'
  },
  buttonText: {
      color: '#F1F2F3', 
      fontSize: 14, 
      fontFamily: 'LatoRegular', 
      textAlign: 'center',
      letterSpacing: 0.42
  }
  });
  export default ForgotPassword;