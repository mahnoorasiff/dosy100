import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Animated,
    ScrollView,
    Dimensions,
    ImageBackground,
} from 'react-native';
import * as Speech from 'expo-speech';
import { COLORS, SIZES } from '../components/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const data = [
    {
        
        bgimg: require('./screenspics/addscreen1.png'),
        answer: 6,

    },

    {
       
        bgimg: require('./screenspics/subscreen1.png'),
        answer: 7,
        
    },

    {
       
        bgimg: require('./screenspics/addscreen2.png'),
        answer: 8,

    },

    {
    
        bgimg: require('./screenspics/addscreen3.png'),
        answer: 5,

    },


    {
       
        bgimg: require('./screenspics/subscreen2.png'),
        answer: 2,

    },

    {
       
        bgimg: require('./screenspics/subscreen3.png'),
        answer: 4,

    },


    {
    
        bgimg: require('./screenspics/addscreen4.png'),
        answer: 9,

    },

    {
    
        bgimg: require('./screenspics/addscreen5.png'),
        answer: 8,

    },

    {
       
        bgimg: require('./screenspics/subscreen4.png'),
        answer: 4,

    },

    {
    
        bgimg: require('./screenspics/subscreen5.png'),
        answer: 4,

    },

    {
    
        bgimg: require('./screenspics/addscreen6.png'),
        answer: 10,

    },

    {
    
        bgimg: require('./screenspics/addscreen7.png'),
        answer: 9,

    },


    {
       
        bgimg: require('./screenspics/multibonus1.png'),
        answer: 2,

    },


]

const Plusminus = ({navigation}) => {
    const allQuestions = data;

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [isOptionsDisabled2, setIsOptionsDisabled2] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [gonextpage, setgonextpage] = useState(false)

    const [a1Image, seta1Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a2Image, seta2Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a3Image, seta3Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a4Image, seta4Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a5Image, seta5Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a6Image, seta6Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a7Image, seta7Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a8Image, seta8Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a9Image, seta9Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a10Image, seta10Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a11Image, seta11Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a12Image, seta12Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a13Image, seta13Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a14Image, seta14Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.png")
    const [a15Image, seta15Image] = useState("https://i.postimg.cc/d1qFnqy0/b2.pngs")

    const [userPlanetCount, setUserPlanetCount] = useState(0)
    const [showModal, setshowModal]= useState(false)
   

    const checkUserAnswer = () => {
        if (allQuestions[currentQuestionIndex].answer == userPlanetCount) {

setshowModal(true)



            setShowNextButton(false)
            setgonextpage(true)
        }
        else {
            Alert.alert("Incorrect, Try Again!")
            setIsOptionsDisabled(false)
            setIsOptionsDisabled2(false)

            setUserPlanetCount(0);
            seta1Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta2Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta3Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta4Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta5Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta6Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta7Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta8Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta9Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta10Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta11Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta12Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta13Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta14Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta15Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        }

    }

    const planetSelected = (imageuri) => {
        console.log(userPlanetCount)
        setUserPlanetCount(userPlanetCount + 1)
        if (userPlanetCount == 0) {
            seta1Image(imageuri)
        }
        else if (userPlanetCount == 1) {
            seta2Image(imageuri)
        }
        else if (userPlanetCount == 2) {
            seta3Image(imageuri)
        }
        else if (userPlanetCount == 3) {
            seta4Image(imageuri)
        }
        else if (userPlanetCount == 4) {
            seta5Image(imageuri)
        }
        else if (userPlanetCount == 5) {
            seta6Image(imageuri)
        }
        else if (userPlanetCount == 6) {
            seta7Image(imageuri)
        }
        else if (userPlanetCount == 7) {
            seta8Image(imageuri)
        }
        else if (userPlanetCount == 8) {
            seta9Image(imageuri)
        }
        else if (userPlanetCount == 9) {
            seta10Image(imageuri)
        }
        else if (userPlanetCount == 10) {
            seta11Image(imageuri)
        }
        else if (userPlanetCount == 11) {
            seta12Image(imageuri)
        }
        else if (userPlanetCount == 12) {
            seta13Image(imageuri)
        }
        else if (userPlanetCount == 13) {
            seta14Image(imageuri)
        }
        else if (userPlanetCount == 14) {
            seta15Image(imageuri)
        }

    };

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            setShowScoreModal(true);
        } else {
            console.log("++++++")
            console.log(currentQuestionIndex)
            console.log(allQuestions.length)
            console.log("++++++")
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setIsOptionsDisabled2(false)
            setShowNextButton(true);
            setgonextpage(false);


            setUserPlanetCount(0);
            seta1Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta2Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta3Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta4Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta5Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta6Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta7Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta8Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta9Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta10Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta11Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta12Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta13Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta14Image("https://i.postimg.cc/d1qFnqy0/b2.png");
            seta15Image("https://i.postimg.cc/d1qFnqy0/b2.png");

        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start();
    };

  

    const restartQuiz = () => {
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);

        setgonextpage(false);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setIsOptionsDisabled2(false);
        setShowNextButton(true);

        setUserPlanetCount(0);
        seta1Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta2Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta3Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta4Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta5Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta6Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta7Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta8Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta9Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta10Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta11Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta12Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta13Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta14Image("https://i.postimg.cc/d1qFnqy0/b2.png");
        seta15Image("https://i.postimg.cc/d1qFnqy0/b2.png");

        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };


    const renderQuestion = () => {
        return (
            <View
                style={{
                    marginVertical: 10
                }}>
                {/* Question */}
                <View
                    style={{

                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 80,

                        height: 150
                    }}
                >

                </View>
            </View>
        );
    };

    const renderAnswerSpace = () => {
        return (
            <View
                style={{
                    marginVertical: 10
                }}>
                {/* Question */}
                <View
                    style={{

                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 1,
                        height: 200
                    }}
                >
                    <View
                        style={styles.answerSpaveView}>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a1Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a2Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a3Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a4Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a5Image }}></Image>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={styles.answerSpaveView}>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a6Image }}></Image>
                            </View>
                        </TouchableOpacity> 

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a7Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a8Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a9Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a10Image }}></Image>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View
                        style={styles.answerSpaveView}>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a11Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a12Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a13Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a14Image }}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <View
                                style={styles.planetViewA} >
                                <Image style={styles.planetImageA}
                                    source={{ uri: a15Image }}></Image>
                            </View>
                        </TouchableOpacity>




                    </View>

                </View>
            </View>
        );
    };

    const renderAllOptions = () => {
        return (
            <View
                style={{
                    marginVertical: 5
                }}>
                {/* Question */}
                <View
                    style={{

                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: 1,
                        height: Dimensions.get('window').height/20,
                        flexDirection: 'column'
                    }}

                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            marginTop: 1,
                            height: 50,
                            width: "100%",
                            flexDirection: 'row'
                        }}>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/wxQy6vVw/p1.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/wxQy6vVw/p1.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/xCKkNTST/p2.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/xCKkNTST/p2.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/Y0Mv6KpN/p3.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/Y0Mv6KpN/p3.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/RhdNGsFk/p4.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/RhdNGsFk/p4.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            alignItems: 'center',
                            marginTop: 1,
                            height: 110,
                            width: "100%",
                            flexDirection: 'row'
                        }}
                    >

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/L8XZQpjN/p5.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* p5 mathquiz */}
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/L8XZQpjN/p5.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/Hkh8fh2H/p6.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            {/* mathquizp6 */}
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/Hkh8fh2H/p6.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => planetSelected("https://i.postimg.cc/0QgMNKFB/p7.png")}
                            style={{
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            
                            <View
                                style={styles.planetView} >
                                <Image style={styles.planetImage}
                                    source={{uri:"https://i.postimg.cc/0QgMNKFB/p7.png"}}></Image>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    };


    const renderNextButton = () => {
        if (gonextpage) {
            return (
                <View style={{marginVertical:38}}>
                    <TouchableOpacity
                        onPress={() => {

                            handleNext();
                        }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <Ionicons
                            name="arrow-forward-circle-outline"
                            size={70}
                            color={COLORS.accent}
                        />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    };


    const renderCheckButton = () => {
        if (showNextButton) {
            return (
                <View style={{marginVertical:38}}>
                    <TouchableOpacity
                        onPress={() => {

                            checkUserAnswer();
                        }}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                        }}>
                        <Ionicons
                            name="checkmark-circle-outline"
                            size={70}
                            color={COLORS.accent}
                        />
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    };


    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 20,
                borderRadius: 20,
                backgroundColor: '#00000020',

            }}>
                <Animated.View style={[{
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: "yellow"
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }

    return (
        <ScrollView
            style={{
                flex: 1,
            }}>
            <View
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                }}>
                <ImageBackground
                    style={styles.bgView}
                    source={ allQuestions[currentQuestionIndex]?.bgimg }>
                    <View
                        style={{
                            flex: 1,
                            paddingVertical: 40,
                            paddingHorizontal: 16,
                            //backgroundColor: COLORS.background,
                            position: 'relative',
                            borderColor: 'red',
                           // borderWidth: 2
                        }}>

                        { renderProgressBar() }

                        {renderQuestion()}

                        {renderAnswerSpace()}

                        {renderAllOptions()}

                        {renderCheckButton()}

                        {renderNextButton()}


{showModal == true ?

 <View style={styles.container}>

<Modal
  animationType={"fade"}
  transparent={true}
  visible={true}
>
{Speech.speak("Great Job", { rate: 0.85 })}

  <View style={styles.modal2}>
  <ImageBackground source= {require('./screenspics/alert.png')} resizeMode="contain" style={{width:"100%", height:"101%"}}>
    
    <TouchableOpacity onPress={()=>{setshowModal(false)}}
      
      style={{ marginTop: height/3.6, alignItems:"center", justifyContent:"center",
       borderRadius: 10, padding: 15 }}
    >
      <Text style={{ color: "white", fontSize:22, fontWeight:"400" }}>Continue</Text>

    </TouchableOpacity>
    </ImageBackground>
  </View>

</Modal>
</View>

: 
showScoreModal== true? 
                        
                        <Modal transparent={true} visible={showScoreModal}>
                            <View
                                style={{...styles.modal2, backgroundColor:"#85929E"}} 
                                >
                                
                                {Speech.speak("Level Completed, let's try another exercise", { rate: 0.85 })}
            <Text style={{padding:25, color:"white", fontWeight: "500", fontSize: 22 }}>LEVEL COMPLETED!!</Text>


                                    <TouchableOpacity
                                                    onPress={() => {
                                                        navigation.goBack();
                                                      }}
                                        style={{
                                            marginTop:30,
                                            backgroundColor: COLORS.accent,
                                            padding: 22,
                                            width: '70%',
                                            height: 35,
                                            borderRadius: 20,
                                            justifyContent: 'center',
                                            alignItems: "center",
                                            alignSelf: 'center',
                                        }}>
                                        <Text
                                            style={{
                                                textAlign: 'center',
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: COLORS.white,
                                                opacity: 0.8,
                                                fontSize: 18,
                                                height: 25,

                                            }}>
                                            OK
                </Text>
                                    </TouchableOpacity>
                                
                            </View>
                        </Modal>


:
<Text> </Text>
}


                    </View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};

export default Plusminus;

const styles = StyleSheet.create({
    oneAvatar: {
        //backgroundCol,
        width: 80,
        height: 80,
        //borderColor: 'red',
        //borderWidth: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        margin: 22,
    },

    imageofava: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
    },

    oneAvatar1: {
        //backgroundColor: '#eedca7',
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 10,
        //justifyContent: 'center',
        //alignSelf: 'center',
        //borderRadius: 200,
        //margin: 22,
        paddingRight: 10,
    },

    imageofava1: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderColor: 'green',
        borderWidth: 5,
        //borderRadius: 200,
        paddingRight: 10,
    },

    view1: {
        width: "90%",
        height: "15%",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
        padding: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 15,
        backgroundColor: '#0000',
    },
    to1: {
        backgroundColor: '#c0d6e4',
        width: "100%",
        height: "100%",
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 5,
        flexDirection: 'row',
        shadowColor: 'grey',
        shadowOffset: {
            width: 2,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
    },

    v2: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: "100%",
        height: "100%",
    },
    bgView: {
        //width: Dimensions.get('window').width,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center'
    },
    numberstop: {
        borderWidth: 3,
        height: 120,
        width: 110,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        borderColor: 'white'
    },

    planetView: {
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2

    },
    planetImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
       // borderWidth: 3,
        borderRadius: 20
    },
    planetViewA: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5

    },
    planetImageA: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        //borderColor: 'red',
        //borderWidth: 3,
        borderRadius: 20
    },
    answerSpaveView: {
        //borderColor: 'white',
        //borderWidth: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 1,
        height: 70,
        width: "100%",
        flexDirection: 'row',
        marginVertical: 5
    },

    modal2: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height/2.6,
        width: width/1.1,
        borderRadius: 20,
        borderWidth: 0.5,
        marginTop: height/5,
        marginLeft:width/20,
    
      },


});
