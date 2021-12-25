import * as React from 'react';
import { StyleSheet,  View, Text, Image, TouchableOpacity, StatusBar,SafeAreaView, 
FlatList, ImageBackground, Dimensions} from 'react-native';
import Constants from 'expo-constants';



const DATA = [
  {
    id: '1',
    url: require("./screenspics/ealphabetsvideos.png"),
    page:'ealphabetvideos'
  },
  {
    id: '2',
    url: require("./screenspics/efeelings.png"),
    page:'efeelings'
  },
  {
    id: '3',
    url: require("./screenspics/eguesssounds.png"),
    page:'eguesssound'
  },
  {
    id: '4',
    url: require("./screenspics/evideomodelling.png"),
    page:'evideomodelling'
  },
  {
    id: '5',
    url: require("./screenspics/eguessword.png"),
    page:'eguessword'
  },
  {
    id: '6',
    url: require("./screenspics/esentence.png"),
    page:'esentence'
  },
  
];


 const Enghome = ({ navigation }) => {
    
  
const onPressCategory = item => {
  console.log("item ", item)
  const name=item.page
 navigation.navigate(name);
};


const rendercategories = ({ item }) => (
  <TouchableOpacity onPress={() => onPressCategory(item)}>
    <View style={styles.container}>
      <Image style={{resizeMode:"stretch", width:175, 
      height: 190, margin:5}}
       source={ item.url } />
    </View>
  </TouchableOpacity>
);

    return (

     <ImageBackground
                style={styles.bgView}
                source={require("./screenspics/engbg.png")}>

       <View style={{marginTop:85}}>
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

export default Enghome;


const styles = StyleSheet.create({
   container: {
    flex: 1,
    marginVertical:-5,
    marginHorizontal:-1,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  },
    bgView: {
      resizeMode:"cover",
        width:  Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    }
    
})




