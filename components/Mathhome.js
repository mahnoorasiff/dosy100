import * as React from 'react';
import { StyleSheet,  View, Text, Image, TouchableOpacity, StatusBar,SafeAreaView, 
FlatList, ImageBackground, Dimensions} from 'react-native';


const DATA = [
  {
    id: '1',
    url: require("./screenspics/mcard1.png"),
    page:'enumbervideos'
  },

  {
    id: '2',
    url: require("./screenspics/mcard2.png"),
    page:'GuessNumber'
  },

  {
    id: '3',
    url: require("./screenspics/mcard3.png"),
    page:"plusminus"
  },

  {
    id: '4',
    url: require("./screenspics/tracing4.1.png"),
    page:'Trace'
  },
  {
    id: '5',
    url: require("./screenspics/mcard5.png"),
    page:'patterns'
  },
  {
    id: '6',
    url: require("./screenspics/mcard6.png"),
    page:'Memory Game'
  },
  
];



 const Mathhome = ({ navigation }) => {

    
 const onPressCategory = item => {
    console.log("item ", item)
    const name=item.page
   navigation.navigate(name);
 };

 const rendercategories = ({ item }) => (
   <TouchableOpacity onPress={() => onPressCategory(item)}>
     <View style={styles.container}>
       <Image style={{resizeMode:"contain", width:Dimensions.get('window').width/2.2, 
       height: Dimensions.get('window').height/3, marginBottom:10, alignItems:"center", justifyContent:"center"}}
        source={ item.url } />
     </View>
   </TouchableOpacity>
 );


    
    return (

     <ImageBackground
                style={styles.bgView}
                source={require("./screenspics/mathswelcome.png")}>

       <View style={{marginTop:100, marginVertical:10, marginHorizontal:15}}>
      <FlatList 
       data={DATA}
       renderItem={rendercategories} 
       keyExtractor={item => item.id}
       numColumns={2}
        />
</View>
     </ImageBackground>
  
                  
)
}

export default Mathhome;


const styles = StyleSheet.create({
   container: {
    flex: 1
  },
    bgView: {
      resizeMode:"cover",
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    }
    
})

