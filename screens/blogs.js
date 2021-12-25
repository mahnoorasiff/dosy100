import {  Dimensions, Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Constants  from 'expo-constants';
var {height, width} = Dimensions.get('window');
import firebase from 'firebase'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons} from "@expo/vector-icons";
import Card from './card';

const smallSize = width / 3;
const itemWidth = width * .67;
const itemHeight = height / 2 - Constants.statusBarHeight * 2;
const fontSize=  300;


const blogstack = createStackNavigator();
 const BlogStack = () => {
    return (
      <NavigationContainer independent={true}>
        <blogstack.Navigator initialRouteName="bloghome"
        >

            <blogstack.Screen
                name="bloghome"
                component={Bloghome}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />

            <blogstack.Screen
                name="blogcard"
                component={Card}
                options={({ navigation }) => ({
                        
                        headerTitle:"",
                              headerLeft: () =>
                        <Ionicons
                            name="chevron-back-outline"
                            color="black"
                            size={35}
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />
        </blogstack.Navigator>
        </NavigationContainer>
    )
}


class Bloghome extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts:[],  
    }
  }


  componentDidMount() {
  const { posts } = this.state;
  
    firebase.database().ref().child("blogposts")
      .on("value", (snap) => {
        const state = Object.values(snap.val());
        this.setState({
          posts: state
        });
        console.log("state: ", state)
      });  

  }


  onPressCategory = item => {
    console.log("entered onpress", item)
    
    this.props.navigation.navigate('blogcard', { item });
  };


  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, marginVertical:10, flexWrap:"nowrap"}}>
          <Text style={styles.heading}>Trending Blogs</Text>
          <ScrollView contentContainerStyle={{alignItems: 'flex-start'}} style={{paddingHorizontal: 15, flex: 1, width: width}}>
      
              {posts.map((post) => {
                return(                
               this.renderList(post.url, post)
                )
                })}

          </ScrollView>
          </View>
      </View>
    );
  }


  renderList(image,post) {
    if (image === '' ) {
      console.log("no image")
    }

    return <View style={{flexDirection: 'row', flex: 1, padding:6, 
    marginLeft:35, marginRight:35,alignItems: 'center', justifyContent: 'center', marginBottom: 10}}> 
       
       <TouchableOpacity onPress={()=>this.onPressCategory(post)}>
        <Image source={{uri: image}} style={{height: smallSize, borderRadius:6,
           width: smallSize, opacity: 1, resizeMode: 'cover'}} />
       </TouchableOpacity>

        <View style={{marginLeft: 10}}>
        <TouchableOpacity onPress={()=>this.onPressCategory(post)}>
          <Text style={{fontWeight: '500', fontSize: 18}}>
                     { post.title }
                     </Text>
                     </TouchableOpacity>
          <Text style={{fontWeight: '300', fontSize: 15}}>{post.category}</Text>
          
        </View>
      </View>
  }
}




export default class App extends Component {
 
  render() {
    return (
<BlogStack/>
    ) 
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:"wrap",
    marginTop: Constants.statusBarHeight
  },
  heading: {
    fontSize: 25,
    fontWeight: '300',
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
  }
  
});