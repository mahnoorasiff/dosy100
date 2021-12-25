import React, { Component } from 'react';
import Constants from 'expo-constants';
import { View, Text, Image, TouchableOpacity, StyleSheet,  Dimensions, Switch,  Platform, ImageBackground } from 'react-native';


class CBSplash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  render() {
      return (
        <View style={styles.container}>
           <ImageBackground
           style={styles.background}
            source={require("./screenspics/cookbooksplash.png")}>
            
<TouchableOpacity style={styles.button} onPress={()=>{
    this.props.navigation.navigate('RECIPScreen')}}>
<Text style={styles.text}>Get Started</Text>
</TouchableOpacity>
</ImageBackground>
        </View>
      );
    
   
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", 
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    flex:1
    
  },

  background: {
    marginTop:-20,
      width:Dimensions.get('window').width-10,
      height:Dimensions.get('window').height,
      justifyContent:"flex-start",
      alignItems:"flex-start"
  },
  
  button:
  {
    marginTop:Dimensions.get('window').height-65,
    marginLeft:15,
     height:62,
     backgroundColor:'#ff6959',
     width:'45%' ,
     borderRadius:35,
     alignItems:'center',
     justifyContent:'center',
     opacity:0.88

  },
  text:
  {
      // fontFamily: 'LatoBold', 
      fontSize: 20, 
      textAlign: 'center' ,
      color:'#fff' 
  }
  
  });

export default CBSplash;