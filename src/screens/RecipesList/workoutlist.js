import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
const width= Dimensions.get("window").width;
const height = Dimensions.get("window").height;
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';
import {day1, day2, day3, motorskills } from '../../../components/workoutsc'

export default class Woutlist extends React.Component {

  constructor(props) {
    super(props);
  }


  datalist=[...day1, ...day2, ...day3];


  onPresswout = item => {
    
    this.props.navigation.navigate('Activity Planner', { url:item.thumbnail })
    
  };


  renderworkouts = ({ item }) => (
    <View style={{ flexDirection: 'column', paddingHorizontal:"6%", flex:1, justifyContent: 'center',
         alignItems: 'center', marginTop:35 }}>
    <TouchableHighlight style={styles2.card} onPress={() => this.onPresswout(item)}>
          
        <Image style={styles2.photo_} source={{ uri: item.thumbnail }} />
        
    </TouchableHighlight>
    </View>
  );

  render() { 
    console.log("list page")
    
    return (  
      <View style={{backgroundColor:"#2F426D"}}>
         
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.datalist}
          renderItem={this.renderworkouts}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles2 = StyleSheet.create({

  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: "center",
    flex: 1,
    width: width/2.5,
    height: 160,
    paddingVertical: "25%",
    backgroundColor: "#192D5D",
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#cccccc',
    shadowOpacity: 0.65,
    shadowRadius: 3,
    elevation: 3,
    shadowOffset: { width: 6, height: 2 }
  },

  photo_: {
    width: "106%",
    height: 161,
    paddingHorizontal: "8%",
    paddingVertical: "30%",
    backgroundColor: "#D0F0C0",
    borderColor: "#B4D3B2",
    borderWidth: 1,
    borderRadius: 22
  }

})




