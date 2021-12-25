import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../components/constants/theme';
const { width } = Dimensions.get('window');


export const categors = [
    {
        id: 1,
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        title: "Conversation",
        train_words:"4 Training Words",
        nav: "category_conv"
    },

    {
        id: 2,
        day: 1,
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/runninginplace_2-yDho8hJ2pb.mp4",
        title: "Days of week",
        train_words:"7 Training Words",
        nav: "category_weakdays"
    },

    {
        id: 3,
        day: 1,
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/verticaljumps_3-d99kAF7hHX.mp4",
        title: "SHAPES",
        train_words:"3 Training Words",
        nav: "category_shapes"
        
    },

    {
        id: 4,
        day: 1,
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/legraise_4-e41Y8gn0nn.mp4",
        title: "Body parts",
        train_words:"4 Training Words",
        nav: "category_bodyparts"

    },

    {
        id: 5,
        day: 1,
        thumbnail: "https://i.postimg.cc/hPf7Kv6M/801222-multimedia-512x512.png",
        videolink: "https://cdn.kapwing.com/squats_5-p9HglqXUL4.mp4",
        title: "Family",
        train_words:"4 Training Words",
        nav: "category_family"
    },

];


export default evideomodelling = ({ route, navigation }) => {

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
                Let's Start Training...
            </Text>

            <ScrollView horizontal={false}>
                {categors.map(item => {
                    return (
                        <ScrollView horizontal={true}>
                            <View style={styles.view2} >
                                <View>
                                    <TouchableOpacity
                                    >
                                        <Image
                                            style={styles.viewcard}
                                            source={{ uri: item.thumbnail }}
                                        ></Image>
                                    </TouchableOpacity>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    marginHorizontal: 20,
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    height: 100

                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 20,
                                            fontWeight: 'bold'
                                        }}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <Text>{item.train_words}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: 25,
                                        }}>
                                        <Ionicons
                                            name="arrow-forward-circle-outline"
                                            size={40}
                                            onPress={() => navigation.navigate(item.nav)}
                                        />
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