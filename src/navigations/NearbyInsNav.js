import * as React from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import CitiesList from "../screens/Categories/CitiesList";
import Schoolinfo from "../screens/Recipe/Schoolinfo";
import SchoolNames from "../screens/RecipesList/SchoolNames";
import Schoolmap from "../screens/IngredientsDetails/Schoolmap";

const instack = createStackNavigator();
const InstScreenStack = ({ route, navigation }) => {
    return (
        <instack.Navigator initialRouteName="CitiesList"
            screenOptions={{
                //headerShown: false,
            }}
        >


            <instack.Screen name='Citieslist' component={CitiesList}
                options={({ navigation }) => ({
                    headerTitle: "City List",
                    headerTintColor: "white",
                    headerStyle: {

                        // backgroundColor: '#789FCC',
                        backgroundColor: '#6fb157',
                        height: 80
                    },
                    headerLeft: () =>
                        <Ionicons style={{ paddingLeft: 10 }}
                            name="md-menu"
                            size={32}
                            color="white"
                            onPress={() => navigation.toggleDrawer()}
                        />
                })
                }


                />


            <instack.Screen
                name="SchoolInfo"
                component={Schoolinfo}

                options={({ navigation }) => ({
                    headerTitle: "Details",
                    headerTintColor: "white",
                    headerStyle: {

                        backgroundColor: '#6fb157',
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

            <instack.Screen
                name="SchoolNames"
                component={SchoolNames}
              
                options={({ navigation }) => ({
                    headerTitle: "Institutes",
                    headerTintColor: "white",
                    headerStyle: {

                        backgroundColor: '#6fb157',
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

            <instack.Screen
                name="SchoolMaps"
                component={Schoolmap}
                options={({ navigation }) => ({
                    headerTitle: "Map View",
                    headerTintColor: "white",
                    headerStyle: {

                        backgroundColor: '#6fb157',
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
        </instack.Navigator>


    )
}

export default class NearbyInsNav extends React.Component {
    render() {
        return (
            <InstScreenStack />
        );
    }
}
