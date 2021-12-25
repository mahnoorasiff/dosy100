import React, { useState, useEffect } from 'react';

//react native
import { Text, View, Image, StyleSheet, Button, Platform, Dimensions, TouchableOpacity } from 'react-native';


//Expo 
import Constants from 'expo-constants';
import { Camera } from 'expo-camera';
import * as Speech from 'expo-speech';

//Tensorflow
import * as tf from '@tensorflow/tfjs';
import * as cocossd from "@tensorflow-models/coco-ssd";
import { cameraWithTensors } from '@tensorflow/tfjs-react-native';


console.disableYellowBox = true;

export default function Objlive({ navigation }) {
    const [obj, setObject] = useState('');
    const [predictionFound, setPredictionFound] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);

    const [coconetModel, setCoconetModel] = useState(null);
    const [frameworkReady, setFrameworkReady] = useState(false);
    const [trypred, settrypred] = useState(null)
    const TensorCamera = cameraWithTensors(Camera);
    let requestAnimationFrameId = 0;
    const textureDims = Platform.OS === "ios" ? { width: 1080, height: 1920 } : { width: 1600, height: 1200 };
    const tensorDims = { width: 152, height: 200 };

    useEffect(() => {
        if (!frameworkReady) {
            (async () => {
                const { status } = await Camera.requestPermissionsAsync();
                console.log(`permissions status: ${status}`);
                setHasPermission(status === 'granted');
                await tf.ready();
                setCoconetModel(await loadCocoNetModel());
                setFrameworkReady(true);
            })();
        }
    }, []);

   
    useEffect(() => {
        return () => {
            cancelAnimationFrame(requestAnimationFrameId);
        };
    }, [requestAnimationFrameId]);

 
    const loadCocoNetModel = async () => {
        const model = await cocossd.load();
        return model;
    }


    const getPrediction = async (tensor) => {
        if (!tensor) { return; }
        const prediction = await coconetModel.detect(tensor, 1);
        console.log(`prediction: ${JSON.stringify(prediction)}`);


        if (!prediction || prediction.length === 0) { return; }
        if (prediction[0].score > 0.5) {
            console.log(prediction[0].class)
            cancelAnimationFrame(requestAnimationFrameId);
            setPredictionFound(true);

            setObject(prediction[0].class)
        }
    }

 
    const handleCameraStream = (imageAsTensors) => {

        const loop = async () => {
            const nextImageTensor = await imageAsTensors.next().value;
            await getPrediction(nextImageTensor);
            requestAnimationFrameId = requestAnimationFrame(loop);
        };
        if (!predictionFound) loop();
    }

    const reset = () => {
        setObject('');
        setPredictionFound(false);
    }

    const renderCameraView = () => {
        return <View style={styles.cameraView}>
            <TensorCamera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                zoom={0}
                cameraTextureHeight={textureDims.height}
                cameraTextureWidth={textureDims.width}
                resizeHeight={tensorDims.height}
                resizeWidth={tensorDims.width}
                resizeDepth={3}
                onReady={(imageAsTensors) => handleCameraStream(imageAsTensors)}
                autorender={true}

            />

        </View>;
    }
    console.log("object is called:", obj)

    const speak = () => {
        Speech.speak(obj, { rate: 0.5 });

    };

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                KNOW YOUR OBJECT
        </Text>

            <View style={styles.body}>

                {renderCameraView()}
                <View style={{ marginTop: 300, textAlign: 'center' }}>
                    <View style={{ marginTop: 35, flexDirection: "row", alignContent: "space-between", alignItems: "center" }}>
                        <TouchableOpacity
                            title="DETECT" onPress={reset}>
                            <Image source={require("./screenspics/search.png")}
                                style={{ marginTop: 50, resizeMode: "contain", width: 100, height: 100, alignSelf: "flex-start" }}>
                            </Image>
                        </TouchableOpacity>

                        <Text style={{
                            alignSelf: "center",
                            flex: 1,
                            fontWeight: '300',
                            fontSize: 20,
                            letterSpacing: 0.3,
                            textTransform: 'uppercase'
                        }}>"{obj}"</Text>


                        <TouchableOpacity onPress={speak} >
                            <Image source={require("./screenspics/speaker.png")}
                                style={{ marginTop: 50, resizeMode: "contain", alignSelf: "flex-end", width: 100, height: 100 }}>
                            </Image>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>

    );




}







const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ffb7ba',
    },

    title: {
        margin: 15,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '400',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        color: "white"
    },
    body: {
        paddingTop: 15
    },

    cameraView: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: '100%',
        height: '100%',
        paddingTop: 5,

    },
    camera: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 275,
        zIndex: 1,
        borderWidth: 0,
        borderRadius: 0,
    },

    wordTextField: {
        textAlign: 'right',
        fontSize: 20,
        marginBottom: 50
    },

    legendTextField: {
        fontStyle: 'italic',
        color: '#888888'
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'purple',
        borderStyle: 'solid',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30,
        backgroundColor: '#ffffff'
    },
});

