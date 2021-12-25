 import * as React from 'react';
import {
    StyleSheet, Button, View, Text, Image, TouchableOpacity, ImageBackground, Touchable, Dimensions
} from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from '@react-navigation/stack';

import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants';
import Objlive from './objdetcoco';
import CocoSsdScreen from './objdetimage'

const objdetai = ({ route, navigation }) => {
    return (
        <ScrollView >
            <View style={styles.container}>
                <ImageBackground
                    style={styles.bgView}
                    source={require("./screenspics/aibg3.jpg")}>

                    <View style={{
                        flexDirection: "column", justifyContent: "space-evenly",
                        paddingTop: "15%", alignItems: "center", margin: "5%"
                    }}>
                        <TouchableOpacity activeOpacity={0.6}
                            onPress={() => navigation.navigate('CBSplash')}>
                            <Image
                                style={{
                                    width: 285, height: 220, borderRadius: 50,
                                    resizeMode: "contain",
                                    borderColor: 'black',
                                    //borderWidth: 4,
                                    //borderRadius: 200,
                                }}
                                source={require("./screenspics/ai.png")}>
                            </Image>

                        </TouchableOpacity>
                        <View
                        style={{
                            marginTop: 10
                        }}>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: 'bold'
                                
                            }}
                            >LIVE Detection</Text>
                            </View>
                    </View>

                    <View style={{
                        flexDirection: "column",
                        justifyContent: "space-evenly", alignItems: "center",
                        margin: "4%", paddingLeft: "3.8%"
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('WOSplash')}
                        >
                            <Image
                                style={{ width: 285, height: 220, resizeMode: "contain" }}
                                source={require("./screenspics/ai2.png")}>
                            </Image>
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                color: 'white',
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}
                            >From Local Storage</Text>
                            </View>
                    </View>

                </ImageBackground>
            </View>
        </ScrollView>
    )
}

const objdetstack = createStackNavigator();
const ObjDetscreenStack = () => {
    return (
        <objdetstack.Navigator initialRouteName="objdetai"
        >
            <objdetstack.Screen
                name="objdetai"
                component={objdetai}
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
        
            <objdetstack.Screen
                name="CBSplash"
                component={Objlive}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />

            <objdetstack.Screen
                name="WOSplash"
                component={CocoSsdScreen}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />
        </objdetstack.Navigator>
    )
}

export default class getfit extends React.Component {
    render() {
        return (
            <ObjDetscreenStack />
        );
    }
}

const styles = StyleSheet.create({

    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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










