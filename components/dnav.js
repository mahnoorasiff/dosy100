import React, { Component } from 'react';
import {
    StyleSheet, Button, View, Text, ActivityIndicator,
    TouchableOpacity, Image, AsyncStorage, ScrollView
} from 'react-native';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './homescreen';
import AppContainer from '../src/navigations/AppNavigation';
import { Avatar } from "react-native-elements";
import Constants from 'expo-constants';
import AvatarScreen from './AvatarScreen';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import getfit from './getfit'
import { logoutUser } from '../src/api/auth-api'
import NearbyIns from '../src/navigations/NearbyInsNav'
import Obj from './objdet'
import Quiz from './survey'
import PhotoFeed from '../screens/photofeed';
import elearning from './homescreen';


const Drawer = createDrawerNavigator();
class HomeDrawer extends Component {

    state = {
        
        ret: "https://i.postimg.cc/XJ4nMLGP/7.png"
    }

    changepika = () => {
        if (this.props.pic == "dog") {
            this.setState({ ret: "https://i.postimg.cc/XJ4nMLGP/7.png" })

        }
        else if (this.props.pic == "bunny") {
            this.setState({ ret: "https://i.postimg.cc/MTKgbFjz/8.png" })
        }
        else if (this.props.pic == "panda") {
            this.setState({ ret: "https://i.postimg.cc/bw4QRDDr/9.png" })
        }
        else if (this.props.pic == "cat") {
            this.setState({ ret: "https://i.postimg.cc/3NbyJV2N/10.png" })
        }
        else if (this.props.pic == "koala") {
            this.setState({ ret: "https://i.postimg.cc/PfFNZG8r/11.png" })
        }
        else if (this.props.pic == "monkey") {
            this.setState({ ret: "https://i.postimg.cc/Fs3dQW7r/12.png" })
        }
    }

    render() {
        return (
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Avatar" component={AvatarScreen}
                    options={{
                        title: '',
                        drawerIcon: () => (
                            //ter(),
                            <Image
                                source={{ uri: this.state.ret }}
                                style={styles.avatarstyle}
                            />
                        )
                    }}
                />
                <Drawer.Screen name="|" component={AvatarScreen}
                    options={{
                        drawerLabel: "Update Avatar",
                        drawerIcon: () =>
                            <TouchableOpacity>
                                <Ionicons name="add-circle-outline"
                                    size={30} color="#8CBBF1"
                                    onPress={() => this.changepika()} />
                                    
                            </TouchableOpacity>
                    }}

                // options={{
                //                         //title: 'Retreo',
                //                         drawerIcon: ({ focused, size }) => (
                //                             //changepika(),
                //                             <TouchableOpacity style={styles.trickofart}
                //                             onPress = {() => this.changepika()}
                //                             >
                //                                 <Text>UPDATE Avatar</Text>
                //                             </TouchableOpacity>
                //                         )
                //                     }}
                />




                <Drawer.Screen name="Home" component={elearning} initialParams={{ itemId: 42 }}
                    options={{
                        drawerLabel: "Home",
                        drawerIcon: () => <Ionicons name="home-outline" size={30} color="#8CBBF1" />,
                    }}
                />
                <Drawer.Screen name="Parent's Assistance" component={PhotoFeed} initialParams={{ itemId: 42 }}
                    options={{
                        drawerLabel: "Parent's Assistance",
                        drawerIcon: () => <Ionicons name="people-outline" size={30} color="#8CBBF1" />,
                    }}

                />
                <Drawer.Screen name="Assess Child" component={Quiz} initialParams={{ itemId: 42 }}

                    options={{
                        drawerLabel: "Assess Child",
                        drawerIcon: () => <Ionicons name="receipt-outline" size={30} color="#8CBBF1" />,
                    }}

                />
                <Drawer.Screen name="Get Fit" component={getfit}
                    options={{
                        drawerLabel: "Get Fit",
                        drawerIcon: () => <Ionicons name="fitness-outline" size={30} color="#8CBBF1" />,
                    }}

                />
                <Drawer.Screen name="Know your object" component={Obj} initialParams={{ itemId: 42 }}
                    options={{
                        drawerLabel: "Know your Object",
                        drawerIcon: () => <Ionicons name="search" size={30} color="#8CBBF1" />,
                    }}

                />
                <Drawer.Screen name="Nearby Institutes" component={NearbyIns}

                    options={{
                        drawerLabel: "Special Institutes",
                        drawerIcon: () => <Ionicons name="location-outline" size={30} color="#8CBBF1" />,
                    }}

                />
                <Drawer.Screen name="Log Out" component={logoutUser}
                    options={{
                        drawerLabel: "Log Out",
                        drawerIcon: () => <Ionicons name="log-out-outline" size={30} color="#8CBBF1" />,
                    }}

                />


            </Drawer.Navigator>
        );
    }
}


function mapStateToProps(state) {
    return {
        counter: state.counter,
        pic: state.pic
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
    }
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        //justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#002080',
        padding: 8,

    },
    avatarOptions: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 4,
        width: '100%',
        height: 700,
        marginTop: 20,
        backgroundColor: "#000d33"

    },
    avatarActual: {
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 200,
        borderWidth: 5,
    },
    oneAvatar: {
        backgroundColor: "white",
        width: 150,
        height: 150,
        //borderColor: 'red',
        borderWidth: 1,
        //justifyContent: 'center',
        //alignSelf: 'center',
        borderRadius: 200,
        margin: 15
    },
    imageofava: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 3,
        //justifyContent: 'center',
        //alignSelf: 'center',
        borderRadius: 200,
    },
    avatarstyle: {
        width: 150,
        height: 150,
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 200
    },
    trickofart: {
        height: 20,
        width: 500
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeDrawer)
