import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../components/constants/theme';
const { width } = Dimensions.get('window');


export const categors = [
    {
        thumbnail: "https://i.postimg.cc/JhdkhgR3/a.png",
        videolink: "https://cdn.kapwing.com/WhatsApp_Video_2021_12_16_at_01-_uUc6SEtE7.mp4",
    },

    {

        thumbnail: "https://i.postimg.cc/Pxp8v4qg/b.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_698194.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/76FJ32Gf/c.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_846315.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/HnbcBkX3/d.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_419359.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/nVmDH0g7/e.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_484745.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/YqmmC8PY/f.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_676256.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/JhRyK8z5/g.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_731368.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/q7QN5FtV/h.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_911506.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/kgQ6xGq5/i.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_380335.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/vBB4Fv91/j.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_15153.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/26KVzBF0/k.png",
        videolink: "https://cdn.kapwing.com/final_61bb03c076fa9f010f53a64a_315438.mp4",
    },

    {

        thumbnail: "https://i.postimg.cc/MHfXXK9q/l.png",
        videolink: "https://cdn.kapwing.com/runninginplace_2-yDho8hJ2pb.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/FFYx0yqs/m.png",
        videolink: "https://cdn.kapwing.com/verticaljumps_3-d99kAF7hHX.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/xjB35kDG/n.png",
        videolink: "https://cdn.kapwing.com/legraise_4-e41Y8gn0nn.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/6pXLsDQy/o.png",
        videolink: "https://cdn.kapwing.com/squats_5-p9HglqXUL4.mp4",
    },

    {
        thumbnail: "https://i.postimg.cc/nhGKn0sT/p.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/XvNfqddW/q.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/5tPwCySC/r.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/sXv59zT0/s.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/k4zKTHZM/t.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/HnM5R2Dw/u.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/v8xW4Qg4/v.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/c4QwcXcZ/w.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/W1TrYg9Z/x.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/qvwKPqY5/y.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },
    {
        thumbnail: "https://i.postimg.cc/q77K40HM/z.png",
        videolink: "https://cdn.kapwing.com/final_615f36b1ee96a1009f56c4af_202184.mp4",
    },

];


export default Categories_alphabets = ({ route, navigation }) => {

    return (
        <ScrollView
            style={styles.container}
            //contentContainerStyle={styles.contentContainer}
            horizontal={false}
            decelerationRate={0}
            snapToInterval={width - 60}
            snapToAlignment={'center'}
        >
           
            <Text style={{ ...styles.heading, marginTop: "15%", padding: 5, fontSize: 20, fontWeight: 'bold' }}>
                Let's Learn Alphabets
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
        width: 350,
        margin: 8,
        borderRadius: 10,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
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