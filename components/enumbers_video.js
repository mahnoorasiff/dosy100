import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../components/constants/theme';
const { width } = Dimensions.get('window');


export const categors = [
    {
        thumbnail: "https://i.postimg.cc/fynBgktr/1.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-C2dXFlv2vw.mp4",
    },

    {

        thumbnail: "https://i.postimg.cc/jSdv1p2t/2.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-6oksD4sAsm.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/XYHx6sBF/3.png",
        videolink: "https://cdn.kapwing.com/final_61baf519553ab10066b41b6c_461151.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/DzS6v11N/4.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_17_at_01-2GdTs4wyrF.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/jjBXLCXS/5.png",
        videolink: "https://cdn.kapwing.com/final_61baf519553ab10066b41b6c_481225.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/nh0ScHgX/6.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_16_at_13-92rFjdU68Y.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/yNxQDMCv/7.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_16_at_13-_sUGhS9Hlx.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/Wpg9qmxL/8.png",
        videolink: "https://cdn.kapwing.com/final_61baf519553ab10066b41b6c_879489.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/tCbB3ZH1/9.png",
        videolink: "https://cdn.kapwing.com/final_61baf519553ab10066b41b6c_379851.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/ZKLVVbTw/10.png",
        videolink: "https://cdn.kapwing.com/final_61baf519553ab10066b41b6c_959853.mp4",
    },

];


export default Categories_numbers = ({ route, navigation }) => {

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
                Let's Learn Numbers
            </Text>

            <ScrollView horizontal={false}>
                {categors.map(item => {
                    return (
                        <ScrollView horizontal={true}>
                            <View style={styles.view2} >
                                <View>
                                    <TouchableOpacity
                                    onPress={() => navigation.navigate('Videos Screen2', { vidurl: item.videolink })}
                                    >
                                        <Image
                                            style={styles.viewcard}
                                            source={{ uri: item.thumbnail }}
                                        ></Image>
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
        width : 350,
        margin: 8,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems:'center',
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
        borderRadius: 10,

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