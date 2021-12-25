import * as React from 'react';
import { StyleSheet,  View, Text, Image, TouchableOpacity, StatusBar, ImageBackground, Dimensions} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons} from "@expo/vector-icons";
import Mathhome from './Mathhome';
import GuessNumb from './guessthenumber'
import English from './homescreen_eng'
import TraceNumber from './tracethenumber';
import Plusminus from './plusminus';
import Patterns from './patterns';
import esentence from './esentence'
import efeelings from './efeelings'
import eguessword from './eguessword';
import eguesssound from './eguesssound';
import Categories_alphabets from './ealphabetsvideos';
import Categories_numbers from './enumbers_video';
import MemoryGame from './memorygame';

import evideomodelling from './evideomodelling';
import Categories_conv from "./conversation_page"
import Categories_weekdays from "./weekdays_page"
import Categories_shapes from "./shapes_page"
import Categories_bodyparts from "./bodypart_page"
import Categories_family from "./family_page"




import VideoPlayer from '../src/navigations/videoscreen';


const Home = ({ navigation }) => {
  
    return (

        <ScrollView>
        <View style={styles.container}>
        <ImageBackground
                style={styles.bgView}
                source={require("./screenspics/BG.png")}>
                   
        <View style={{
                     justifyContent: "space-evenly",
                    alignItems:"center",
                paddingTop:10
                    
                }}>
                <TouchableOpacity activeOpacity={0.6} 
                    onPress={() => navigation.navigate('English')}
                    >
                             <Image
                            style={{ width: Dimensions.get('window').width/1.46, 
                            height: Dimensions.get('window').height/3.3,  resizeMode:"contain"
                            }}
                            source={require("./screenspics/english.png")}>
                        </Image>

                    </TouchableOpacity>
                    
                    
                    <TouchableOpacity activeOpacity={0.6} 
                    onPress={() => navigation.navigate('Math')}>
                        <Image
                            style={{ width: Dimensions.get('window').width/1.2, height: Dimensions.get('window').height/3,      resizeMode:"contain"}}
                            source={require("./screenspics/maths.png")}>
                        </Image>
                    </TouchableOpacity>

                    
                <TouchableOpacity activeOpacity={0.6} >
                        <Image
                            style={{width: Dimensions.get('window').width/1.25, height: Dimensions.get('window').height/3, resizeMode:"contain" }}
                            source={require("./screenspics/kyobj.png")}>
                        </Image>
                    </TouchableOpacity>
                    </View>
                    </ImageBackground>
                </View>
                    </ScrollView>

    )
}


const homestack = createStackNavigator();
const HomsecreenStack = () => {
    return (
        <homestack.Navigator initialRouteName="Home"
        >

            <homestack.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({

                    headerTransparent: true,
                    headerTitle: '',
                    headerLeft: () =>

                        <Ionicons
                            name="md-menu"
                            color="white"
                            size={40}
                        />
                })
                }
            />




            <homestack.Screen
                name="English"
                component={English}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />




        <homestack.Screen
                name="Math"
                component={Mathhome}
                options={({ navigation }) => ({
                    header: () => null
                })
                }

            />


            <homestack.Screen
                name="GuessNumber"
                component={GuessNumb}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }
            />

        <homestack.Screen
                name="plusminus"
                component={Plusminus}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }
            />




        <homestack.Screen
                name="Trace"
                component={TraceNumber}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }
            />

<homestack.Screen
                name="patterns"
                component={Patterns}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }
            />


            <homestack.Screen
                name="esentence"
                component={esentence}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />


<homestack.Screen
                name="efeelings"
                component={efeelings}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />


<homestack.Screen
                name="eguessword"
                component={eguessword}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />


<homestack.Screen
                name="eguesssound"
                component={eguesssound}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:75
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={30}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />

<homestack.Screen
                name="enumbervideos"
                component={Categories_numbers}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />



<homestack.Screen
                name="evideomodelling"
                component={evideomodelling}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />





<homestack.Screen
                name="ealphabetvideos"
                component={Categories_alphabets}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle:{
                        height:80
                    },
                headerLeft: () =>

                <Ionicons style={{ padding:12,justifyContent:"center", alignItems:"center"}}
                    name="chevron-back-outline"
                    color="white"
                    size={40}
                    onPress={() => navigation.goBack()}
                />
            })
        }            />


            <homestack.Screen
                name="Memory Game"
                component={MemoryGame}
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

<homestack.Screen
                name="category_conv"
                component={Categories_conv}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />
            <homestack.Screen
                name="category_weakdays"
                component={Categories_weekdays}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />
            <homestack.Screen
                name="category_shapes"
                component={Categories_shapes}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />
            <homestack.Screen
                name="category_bodyparts"
                component={Categories_bodyparts}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />

            <homestack.Screen
                name="category_family"
                component={Categories_family}
                options={({ navigation }) => ({
                    header: () => null
                })
                }
            />












            <homestack.Screen
                name="Videos Screen2"
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


        </homestack.Navigator>
    )
            }

const styles = StyleSheet.create({

    
    container: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor: "black", 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 0,
        
      },
    bgView: {
        width: "101%",
        height: Dimensions.get('window').height,

    }
    
})


const elearning = ({ navigation }) => {
        return (
          
            <HomsecreenStack />

        );
    }



export default elearning;

