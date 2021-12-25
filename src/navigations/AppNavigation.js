import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import RecipeScreen from '../screens/Recipe/RecipeScreen';
import RecipesListScreen from '../screens/RecipesList/RecipesListScreen';
import IngredientScreen from '../screens/Ingredient/IngredientScreen';
import IngredientsDetailsScreen from '../screens/IngredientsDetails/IngredientsDetailsScreen';
import Constants from 'expo-constants';

const Stack = createStackNavigator();

function MainNavigator() {
  return(
    <Stack.Navigator
    initialRouteName={"Categories"}

      screenOptions={({ navigation }) => ({
        
        headerStyle: {
          backgroundColor: '#f4511e',
          height:  Constants.statusBarHeight *3
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          padding:25,
          fontSize:20,
          // fontWeight: 'bold',
          letterSpacing:-0.5,
          justifyContent:"center",
          alignItems:"center"
          
        },
      
      headerLeft: () =>
        
          <Ionicons
          style={{marginHorizontal:5, paddingTop:15}}
            name="chevron-back-outline"

            color="white"
            size={30}
            onPress={() => navigation.goBack()}
          />
        
     })
    }
    >
      
      <Stack.Screen name='Categories' component={CategoriesScreen}/>
      <Stack.Screen name='Recipe' component={RecipeScreen}/>
      <Stack.Screen name='Recipe List' component={RecipesListScreen} />
      <Stack.Screen name='Ingredient' component={IngredientScreen} />
      <Stack.Screen name='Ingredients' component={IngredientsDetailsScreen} />
  

    </Stack.Navigator>
  )
} 




export default function AppContainer() {
  return(
    
      <MainNavigator/>
    
  )
} 
 

console.disableYellowBox = true; 