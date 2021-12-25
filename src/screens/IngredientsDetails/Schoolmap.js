import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";
import { getIngredientName, getAllIngredients } from "../../data/MockDataAPI2";
import Constants from 'expo-constants';
import MapView, { Polyline } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from 'expo-location';


const Schoolmap = ({ route, navigation }) => {

  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')


  useEffect(() => {
    fetchLoco()
  }, [])




  const fetchLoco = async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log("loco", JSON.stringify(location))
    setlatitude(JSON.parse(location.coords.latitude))
    setlongitude(JSON.parse(location.coords.longitude));
  };



  const inst_name = route.params.title;
  const lati = route.params.lat;
  const longi = route.params.long;
  const addre = route.params.addre;


  console.log("latitude", latitude)

  return (

    <View style={styles.container}>

      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 33.6863724977719,
          longitude: 73.01695308092769,
          latitudeDelta: 0.15,
          longitudeDelta: 0.18,
        }}
        style={styles.map}
      >


        <MapView.Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={"Home"}
          description={"current location"}
          pinColor="red"
          key={1}
        />

        <MapView.Marker
          coordinate={{
            latitude: lati,
            longitude: longi,
          }}
          title={inst_name}
          description={addre}
          pinColor="blue"
          key={2}
        />


        <Polyline
          coordinates={[
            { latitude: latitude, longitude: longitude },
            { latitude: lati, longitude: longi },

          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#145DA0'
          ]}
          strokeWidth={4}
        />
      </MapView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding: 5,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
});




export default Schoolmap;

