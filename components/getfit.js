import * as React from 'react';
import {
    StyleSheet, Button, View, Text, Image, TouchableOpacity, ImageBackground, Touchable,Dimensions
} from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import bmi_calc from './bmi-calc';
import calorie from './calorie';
import AppContainer from '../src/navigations/AppNavigation';
import MPRecipes from '../src/screens/RecipesList/mealplanner-recipelist';
import Mealplanner from './mealplanner';
import Activityplanner from './activityplanner';
import Wouts from './workoutsc';
import MSarticles from './motorskillsarticles';
import VideoPlayer from '../src/navigations/videoscreen';
import Woutlist from '../src/screens/RecipesList/workoutlist';
import CBSplash from './splashcookbook';
import WOSplash from './workoutsplash';

const getfitsc = ({ route, navigation }) => {

    return (
        <ScrollView >
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bgView}
                    source={require("./screenspics/getfitbgfinal.png")}>
                    <View style={{
                        flexDirection: "row", justifyContent: "space-evenly",
                        paddingTop: "15%", alignItems: "center", margin: "5%"
                    }}>

                        <TouchableOpacity activeOpacity={0.6}
                            onPress={() => navigation.navigate('CBSplash')}>
                            <Image
                                style={{
                                    width: 285,  height: 220, borderRadius:50,
                                    resizeMode: "contain"
                                }}
                                source={require("./screenspics/cookbg.png")}>
                            </Image>

                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6}
                            onPress={() => navigation.navigate('Meal Planner')}>
                            <Image
                                style={{ width: 65, height: 65, resizeMode: "contain" }}
                                source={require("./screenspics/planner.png")}>
                            </Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-evenly", alignItems: "center",
                        margin: "4%", paddingLeft: "3.8%"
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WOSplash')}
                        >
                            <Image
                                style={{ width: 285, height: 220, resizeMode: "contain" }}
                                source={require("./screenspics/wobg.png")}>
                            </Image>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.6}
                            onPress={() => navigation.navigate('Activity Planner')}>
                            <Image
                                style={{ width: 65, height: 65, resizeMode: "contain" }}
                                source={require("./screenspics/planner.png")}>
                            </Image>
                        </TouchableOpacity>

                    </View>


                    <View style={{ flexDirection: 'row', alignItems: "flex-end",
                     justifyContent: 'space-between',flex: 1, marginBottom:15, paddingEnd:5, paddingStart:5 }}>
                       

                            <View >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CalorieScreen')}
                                >
                                    <Image
                                        style={{ width: 100, height: 75, resizeMode:"contain" }}
                                        source={require("./screenspics/calorieicon.png")}
                                    >
                                    </Image>
                                </TouchableOpacity>
                            </View>

                            <View >
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('BMI')}
                                >
                                    <Image
                                        style={{ width: 100, height:70, resizeMode:"contain" }}
                                        source={require("./screenspics/bmiicon.png")}
                                    >
                                    </Image>
                                </TouchableOpacity>
                            </View>

                        


                    </View>
                </ImageBackground>
            </View>
        </ScrollView>




    )
} 






const getfitstack = createStackNavigator();
const GetFitscreenStack = () => {
    return (
        <getfitstack.Navigator initialRouteName="getfitsc1"
        >




            <getfitstack.Screen
                name="getfitsc1"
                component={getfitsc}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () =>

                        <Ionicons
                            name="md-menu"
                            color="white"
                            size={40}
                            onPress={() => navigation.toggleDrawer()}
                        />
                })
                }
            />


            <getfitstack.Screen name='BMI' component={bmi_calc}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                    headerLeft: () =>

                        <Ionicons style={{ padding:10,justifyContent:"center", alignItems:"center"}}
                            name="chevron-back-outline"
                            color="white"
                            size={40}
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />
            <getfitstack.Screen name='Meal Planner' component={Mealplanner}
                options={({ navigation }) => ({
                    headerTitle: "Plan My Meals",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: '#AFDAA3',
                        height: 80,
                    },

                    headerLeft: () =>

                        <Ionicons style={{ padding:10,justifyContent:"center", alignItems:"center"}}
                            name="chevron-back-outline"
                            color="white"
                            size={30}
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />


            <getfitstack.Screen
                name="CBSplash"
                component={CBSplash}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />


            <getfitstack.Screen name='MPRecipes' component={MPRecipes}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#AFDAA3',
                        height: 80
                    },
                    headerLeft: () =>
                        <Ionicons style={{ paddingLeft: 10 }}
                            name="chevron-back-outline"
                            size={32}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />

            <getfitstack.Screen name='Activity Planner' component={Activityplanner}
                options={({ navigation }) => ({
                    headerTitle: "Activity",
                    headerTintColor: '#fff',
        headerTitleStyle: {
          padding:15,
          fontSize:22,
          // fontWeight: 'bold',
          letterSpacing:-0.5,
          justifyContent:"center",
          alignItems:"center"},
        
                    headerStyle: {
                         
                        backgroundColor: '#2F426D',
                        height:75
                    
                    },
                    headerLeft: () =>
                        <Ionicons style={{ paddingLeft: 10 }}
                            name="chevron-back-outline"
                            size={32}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />

            <getfitstack.Screen
                name="CalorieScreen"
                component={calorie}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                    headerLeft: () =>

                        <Ionicons style={{ padding:10,justifyContent:"center", alignItems:"center"}}
                            name="chevron-back-outline"
                            color="white"
                            size={40}
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />

            <getfitstack.Screen
                name="WOSplash"
                component={WOSplash}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />

            <getfitstack.Screen
                name="Workout screen"
                component={Wouts}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () =>

                        <Ionicons
                            name="chevron-back-outline"
                            color="white"
                            size={40}
                            onPress={() => navigation.goBack()}
                        />
                })
                }

            />


            <getfitstack.Screen
                name="WorkOut List"
                component={Woutlist}
                options={({ navigation }) => ({
                    headerTitle: "Workout List",
                    headerTintColor: '#fff',
        headerTitleStyle: {
          padding:15,
          fontSize:22,
          // fontWeight: 'bold',
          letterSpacing:-0.5,
          justifyContent:"center",
          alignItems:"center"},
        
                    headerStyle: {
                         
                        backgroundColor: '#2F426D',
                        height:75,
                        opacity:0.7
                    },
                    headerLeft: () =>
                        <Ionicons style={{ paddingLeft: 10 }}
                            name="chevron-back-outline"
                            size={32}
                            color="white"
                            onPress={() => navigation.goBack()}
                        />
                })
                }
            />

            <getfitstack.Screen
                name="Motor Skills Articles"
                component={MSarticles}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () =>

                        <Ionicons
                            name="chevron-back-outline"
                            color="white"
                            size={40}
                            onPress={() => navigation.goBack()}
                        />
                })
                }

            />


<getfitstack.Screen
                name="Videos Screen"
                component={VideoPlayer}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () =>

                        <Ionicons
                            name="chevron-back-outline"
                            color="white"
                            size={40}
                            onPress={() => navigation.goBack()}
                        />
                })
                }

            />


            <getfitstack.Screen
                name="RECIPScreen"
                component={AppContainer}
                options={({ navigation }) => ({
                    header: () => null
                })
                }

            />





        </getfitstack.Navigator>
    )
}

export default class getfit extends React.Component {
    render() {
        return (
            <GetFitscreenStack />
        );
    }
}

const styles = StyleSheet.create({

        container: {
            width:Dimensions.get('window').width,
            height:Dimensions.get('window').height,
            backgroundColor: "#d6c190", 
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: Constants.statusBarHeight,
            padding: 0
          },

    bgView: {
        width: "101%",
        height: Dimensions.get('window').height,
    },


    iconView: {
        width: 120,
        height: 100,
    }

})