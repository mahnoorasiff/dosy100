import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import App from '../App'
import { Avatar } from "react-native-elements";
import Constants from 'expo-constants';
import { connect } from 'react-redux'



class AvatarScreen extends Component { 
    state = {
        profilePic:  "https://i.postimg.cc/MTKgbFjz/8.png"
    }

    changeAvatar = (val) => {
        if (val == 'dog') {
            this.setState({ profilePic: "https://i.postimg.cc/XJ4nMLGP/7.png" })
        }
        else if (val == 'bunny') {
            this.setState({ profilePic: "https://i.postimg.cc/MTKgbFjz/8.png" })
        }
        else if (val == 'panda') {
            this.setState({ profilePic: "https://i.postimg.cc/bw4QRDDr/9.png" })
        }
        else if (val == 'cat') {
            this.setState({ profilePic: "https://i.postimg.cc/3NbyJV2N/10.png" })
        }
        else if (val == 'koala') {
            this.setState({ profilePic: "https://i.postimg.cc/PfFNZG8r/11.png" })
        }
        else if (val == 'monkey') {
            this.setState({ profilePic: "https://i.postimg.cc/Fs3dQW7r/12.png" })
        }
        else {
            this.setState({ profilePic:"https://i.postimg.cc/XJ4nMLGP/7.png"  })
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.avatarActual}>
                        <Avatar
                            rounded
                            size={250}
                            source={{uri : this.state.profilePic}}
                        />
                    </View>

                    <View style={styles.avatarOptions}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('dog') ; this.props.dog()}}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/XJ4nMLGP/7.png"}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('bunny') ; this.props.bunny()}}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/MTKgbFjz/8.png"}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('panda') ; this.props.panda()}}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/bw4QRDDr/9.png"}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('cat') ; this.props.cat() }}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/3NbyJV2N/10.png" }}
                                    ></Image>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('koala') ; this.props.koala() }}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/PfFNZG8r/11.png"}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => { this.changeAvatar('monkey') ; this.props.monkey() }}
                            >
                                <View style={styles.oneAvatar}>
                                    <Image
                                        style={styles.imageofava}
                                        source={{uri:"https://i.postimg.cc/Fs3dQW7r/12.png"}}
                                    ></Image>
                                </View>
                            </TouchableOpacity>
                        </View>


                    </View>
                </View>
            </ScrollView>


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
        dog: () => dispatch({type: 'Dog'}),
        bunny: () => dispatch({type: 'Bunny'}),
        panda: () => dispatch({type: 'Panda'}),
        cat: () => dispatch({type: 'Cat'}),
        koala: () => dispatch({type: 'Koala'}),
        monkey: () => dispatch({type: 'Monkey'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarScreen)

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
        //justifyContent: 'center',
        //alignSelf: 'center',
        borderRadius: 200,
    }
})



