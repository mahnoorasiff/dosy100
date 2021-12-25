import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {DATA} from './plannerdaysdata'
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const mealplanner = ({ route, navigation }) => {
  const [selected, setselected] = useState('false');
  const [pressedid, setpressedid] = useState('');
  const [img, setimg] = useState('');

  //useeffect function is updated on each render
  React.useEffect(() => {
    
    if (route.params?.url) {
      // route updated, do something with `route.params.url`
      console.log(pressedid);
      
      setselected(true);
      const img_rec = route.params.url
      console.log("Image recieved: ", img_rec)
      setimg(route.params.url);
      //console.log("DATA ID:",DATA.id2)
      DATA.map( data => {
        if(data.id2 == pressedid){
          data.img = img_rec
          console.log("DATA ID: ", data.id2, "Data img: ", data.img)
        }
      })
      console.log("---------END OF USEEFFECT----------")
      
    }
  }, [route.params?.url]);




  const onPressPlanner = (item) => {
    
    const title = item.name;
    setpressedid(item.id2);
    const card = item;
    console.log("issue: ",item.img)
    navigation.navigate('MPRecipes', { title, card });
    item.img = img;
  
  };

  
  const renderItems = ({ item }) => {
    return (
      <View style={{ backgroundColor: '#f2fee8', flex: 1 }}>
        <Text
          style={{
            marginTop: '12%',
            marginLeft: '4.2%',
            marginRight: '-12%',
            flex: 1,
            fontWeight: '300',
            fontSize: 20,
            letterSpacing: 0.3,
            textTransform: 'uppercase',
          }}>
          {item.day}
        </Text>
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{ ...styles.card, marginTop: '5%' }}
            activeOpacity={0.6}
            onPress={() => onPressPlanner(item)}>
            {item.img != '' ? (
              <Image style={styles.photo_} source={{ uri: item.img }} />
            ) : (
              <Ionicons name="duplicate-outline" color="white" size={50} />
            )}
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: '400',
              marginTop: '6%',
              fontSize: 18,
              color: '#487D49',
              letterSpacing: 0.4,
            }}>
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={{ margin: '1%' }}
        keyExtractor={(item) => item.id2}
        data={DATA}
        renderItem={renderItems}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    width: '90%',
    height: '100%',
    paddingHorizontal: '8%',
    paddingVertical: '28%',
    backgroundColor: '#D0F0C0',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#cccccc',
    shadowOpacity: 0.65,
    shadowRadius: 2,
    elevation: 3,
    shadowOffset: { width: 6, height: 2 },
  },

  photo_: {
    width: '105%',
    height: '185%',
    paddingHorizontal: '8%',
    paddingVertical: '30%',
    backgroundColor: '#D0F0C0',
    borderColor: '#B4D3B2',
    borderWidth: 1,
    borderRadius: 22,
  },
});

export default mealplanner;

