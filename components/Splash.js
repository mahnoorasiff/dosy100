import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground, Switch,  Platform } from 'react-native';


class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  render() {
      return (
        <View style={styles.background}>
          {/* <View style={styles.bg}> */}
            <Image source={require("./screenspics/1.png")} style={styles.image}/>
            {/* </View> */}
<TouchableOpacity style={styles.button} onPress={()=>{
    // console.log(this.props.navigation)
    this.props.navigation.navigate('LoginSignUp')}}>
<Text style={styles.text}>Get Started</Text>
</TouchableOpacity>
        </View>
      );
    
   
  }
}


const styles = StyleSheet.create({
  background: {
      //backgroundColor: '#FFFFFF', 
      flex:1,
      alignItems:'center',
      justifyContent:'center'
  
  },
  // bg: {
  //     backgroundColor: '#FFFFFF', 
  //     flex:1,
  //     alignItems:'center',
  //     // justifyContent:'center'
  
  // },
  image:
  {
      width:'145%',
      resizeMode:'cover',
      height:'100%',
      alignSelf:'center',
      position:'absolute'
  },
  button:
  {
     height:50,
     backgroundColor:'#FFA07A',
     width:'50%' ,
     borderRadius:5,
     alignItems:'center',
     justifyContent:'center',
     marginTop:'115%'
  },
  text:
  {
      // fontFamily: 'LatoBold', 
      fontSize: 20, 
      textAlign: 'center' ,
      color:'#fff' 
  }
  
  });

export default Splash;
