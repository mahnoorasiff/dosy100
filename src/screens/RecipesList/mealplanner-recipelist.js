import React from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import {AsyncStorage} from '@react-native-async-storage/async-storage'
import styles from './styles';
import { getRecipes, getCategoryName } from '../../data/MockDataAPI';

export default class MPRecipes extends React.Component {

  constructor(props) {
    super(props);
  }

  onPressRecipe = item => {
    var photourl=item.photo_url
    this.props.navigation.navigate('Meal Planner', { url:item.photo_url })
    
    
    //console.log("picture..", item.photo_url)
  };


  //   async storeData (photosaved) {
  //   try {
  //     const save1 = JSON.stringify(photosaved)
  //     await AsyncStorage.setItem('@storage_Key1', save1)
  //   } catch (error) {
  //     console.log('error saving data')
  //   }
  // };

  

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.9)'onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {

    const item = this.props.route.params.card;
    const recipesArray = getRecipes(item.id);
    return (  
      <View>
      
         {
      this.props.navigation.setOptions({
        headerTitle: () => (
              <Text style={{color:"white", fontSize:22, fontWeight:"500", letterSpacing:"0.4"}}>{this.props.route.params.title+ " Recipes"}</Text>
        )})
        }
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={recipesArray}
          renderItem={this.renderRecipes}
          keyExtractor={item => `${item.recipeId}`}
        />
      </View>
    );
  }
}
