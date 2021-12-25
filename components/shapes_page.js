import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../components/constants/theme';
const { width } = Dimensions.get('window');


export const wl1 = [
    {
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-kpPOjdrCab.mp4",
        title: "Triangle",
    },

    {
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-KegmzeTmJW.mp4",
        title: "Circle",
    },

    {
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-KegmzeTmJW.mp4",
        title: "Square",
    },


];


export default Categories_shapes = ({ route, navigation }) => {

    return (
        <ScrollView
            style={styles.container}
            //contentContainerStyle={styles.contentContainer}
            horizontal={false}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={'center'}
        >
            <Text style={{ ...styles.heading, marginTop: "15%", padding: 5, fontSize:20, fontWeight:'bold' }}>
                Shapes
            </Text>

            <ScrollView horizontal={false}>
                {wl1.map(item => {
                    return (
                        <ScrollView horizontal={true}>
                            <View style={styles.view2} >
                            <View>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'lightblue',
                                        width: 200,
                                        height: 70,
                                        borderRadius: 10,
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                        alignItems: "center",
                                        justifyContent:'center',
                                        marginVertical: 30
                                    }}
                                    onPress={() => navigation.navigate('Videos Screen2', { vidurl: item.videolink })}
                                >
                                    <View style={{
                                        alignSelf: 'center',
                                        alignContent: 'center',
                                        alignItems: "center",
                                        justifyContent: 'center'
                                    }}
                                    >
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            alignSelf: 'center',
                                            alignContent: 'center',
                                            alignItems: "center",
                                            justifyContent: 'center'
                                        }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            </View>
                        </ScrollView>

                    );
                })}
            </ScrollView>
        </ScrollView>
    );

}


const styles = StyleSheet.create({
    heading: {
        fontSize: 18.5,
        marginBottom: "2%",
        letterSpacing: 0.2,
        fontWeight: '500',
        paddingHorizontal: "5%",
        color: "#006666"
    },

    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 60
    },
    container: {
        backgroundColor: 'beige',
        height: Dimensions.get('window').height / 3,
        flex: 1,

        //paddingTop: Constants.statusBarHeight,
    },

    view: {
        width: 160,//width - 50
        margin: 10,
        height: 150,
        borderRadius: 200,
    },

    circles: {
        width: '100%',
        height: '100%',
        //borderColor: 'grey',

        borderRadius: 200,
        borderColor: "white"
    },
    view2: {

        margin: 8,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        width: 350,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center'


    },
    view3: {
        width: 200,
        margin: 8,
        borderRadius: 10,
        paddingHorizontal: 8
    },

    viewcard: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        borderRadius: 200,
        backgroundColor: 'blue'

    },
    viewcard2: {
        width: 120,
        resizeMode: "contain",
        borderRadius: 2,
    },
    viewcard3: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 200,
    }
});