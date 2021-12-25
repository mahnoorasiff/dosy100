import React from "react";
import {  Text, View, StyleSheet, ScrollView, Image} from 'react-native';

const Card = ({props, route}) => {
    const item = route.params.item
    console.log(item)
  return (
 <View style={{flex:1, justifyContent:"center", alignContent:"center", alignItems:"center", backgroundColor:"white"}}>
 <View style={{ flexDirection:"column", justifyContent:"center", alignItems:"center", flexWrap:"true"}}>
 <Text style={styles.blogtitle}> {item.title} </Text>
 <Text style={{...styles.blogtitle,marginTop:15, fontSize:12}}> {item.date}</Text>
 </View>
 <View style={styles.card}> 
 <ScrollView style ={{flex:1, padding:5, textAlign: 'center'}}>
 <Image style={styles.blogpic} source={{uri:item.url}}> 
 </Image>
<Text style={{...styles.blogtitle, fontSize:15, fontWeight:"300", wordSpacing:0.5 }}> {item.content} </Text>
 </ScrollView>
 
 
</View>
</View>
  )
}
export default Card;



const styles = StyleSheet.create({
  card: {
    alignContent:"center",
    justifyContent:"center",
    flex:1,
    width:"95%",
    borderRadius: 20,
  },
  blogpic: {
    height:300,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  shadowColor: 'blue',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
  
  },
  
  blogtitle: {
    fontSize: 20,
    fontWeight: '400',
    alignSelf: 'flex-start',
    marginTop:10,
    paddingHorizontal: 22,
  }
  

  })