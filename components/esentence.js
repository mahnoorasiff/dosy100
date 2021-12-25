import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { COLORS, SIZES } from './constants/theme';
import data from '../src/data/EngQuiz6Data';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Quiz = () => {
  const allQuestions = data;
 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [isOptionsDisabled2, setIsOptionsDisabled2] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [userFirstAnswer, setuserFirstAnswer] = useState("")
  const [userSecondAnswer, setuserSecondAnswer] = useState("")
  const [gonextpage, setgonextpage] = useState(false)

  const validateResult = (selectedOption) => {
    setuserFirstAnswer(selectedOption)
    setIsOptionsDisabled(true);
    if (isOptionsDisabled2 == true) {
      setShowNextButton(true)
    };
  };
  const validateResult2 = (selectedOption) => {
    setuserSecondAnswer(selectedOption)
    setIsOptionsDisabled2(true);
    if (isOptionsDisabled == true) {
      setShowNextButton(true)
    };
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
      setShowNextButton(false);
      setgonextpage(false);
      setuserFirstAnswer("");
      setuserSecondAnswer("")
    }
  };

  const checkIfCorrect = () => {
    if (allQuestions[currentQuestionIndex].truefirstoption == userFirstAnswer && allQuestions[currentQuestionIndex].truesecondoption[0] == userSecondAnswer) {
      Alert.alert('OKAY')
      setShowNextButton(false)
      setgonextpage(true)
    }
    else {
      Alert.alert("NOT OKAY")
      setIsOptionsDisabled(false)
      setIsOptionsDisabled2(false)
    }

  }

  const restartQuiz = () => {
    setShowScoreModal(false);
    setCurrentQuestionIndex(0);
    setuserFirstAnswer(false);
    setuserSecondAnswer(false);
    setgonextpage(false);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setIsOptionsDisabled2(false);
    setShowNextButton(false);
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
          flex:0.3, marginTop:height/2.55 ,
          
        }}>

        <View
        >
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
          </TouchableOpacity>
        </View>

        {/* Question */}
        <View
          style={{
            flex:1,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flexDirection:"row"
          }}
        >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                height: 60,
                width:130,
                borderRadius: 15,
                borderColor: "#138D75",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                backgroundColor:"#FEF9E7",
                marginVertical: 10,
              }}>
              <Text style={{ fontSize: 20, color: "#1A5276" , textAlign:"center" }}>{userFirstAnswer}</Text>
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.error,
                fontSize: 25,
                marginTop: 5,
                marginHorizontal: 3

              }}>
              {allQuestions[currentQuestionIndex]?.sentence}
            </Text>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                height: 60,
                width:130,
                borderRadius: 15,
                flexDirection: 'row',
                borderColor:"#138D75",
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor:"#FEF9E7",
                paddingHorizontal: 20,
                marginVertical: 10,
              }}>
              <Text style={{ fontSize: 20, color: "#1A5276" , textAlign:"center" }}>{userSecondAnswer}</Text>
            </TouchableOpacity>
         
        </View>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <View
        style={{
          flex:0.2,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 5,
          alignItems: 'center',
        }}>
        
        {allQuestions[currentQuestionIndex]?.firstoptions.map((option) => (
          <TouchableOpacity
            onPress={() => validateResult(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 2,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + '40',
              backgroundColor:
                option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                    ? COLORS.error + '20'
                    : COLORS.secondary + '20',
              height: 70,
              width:width/3.1,
              borderRadius: 25,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 8,
              margin:2
            }}>
            <Text style={{ fontSize: 20, letterSpacing:0.2, color: "#1A5276" }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderOptions2 = () => {
    return (
      <View
        style={{
          flex:0.22,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 10,
          alignItems: 'center',
        }}>
        
        {allQuestions[currentQuestionIndex]?.secondoptions.map((option) => (
          <TouchableOpacity
            onPress={() => validateResult2(option)}
            disabled={isOptionsDisabled2}
            key={option}
            style={{
              borderWidth: 2,
              borderColor:
                option == correctOption
                  ? COLORS.success
                  : option == currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + '40',
              backgroundColor:
                option == correctOption
                  ? COLORS.success + '20'
                  : option == currentOptionSelected
                    ? COLORS.error + '20'
                    : COLORS.secondary + '20',
              height: 75,
              width:width/3.5,
              borderRadius: 30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 5,
              
            }}>
            <Text style={{ fontSize: 20, letterSpacing:0.2, color: "#1A5276"  }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (gonextpage) {
      return (
        <View style={{flex:0.3}}>
          <TouchableOpacity
            onPress={() => {

              handleNext();
            }}
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding:15
            }}>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={82}
              color={COLORS.success}
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
        <View style={{flex:0.3}}>
          <TouchableOpacity
            onPress={() => {
              checkIfCorrect();
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Ionicons
              name="checkmark-circle-outline"
              size={82}
              color={COLORS.error}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  };

  const [progress, setProgress] = useState(new Animated.Value(0));


  return (
    
        <ScrollView style={{flex:1}}>
      <ImageBackground
                    style={styles.bgView}
                    source={allQuestions[currentQuestionIndex]?.imgsrc}>
      
          

        {/* Question */}
        {renderQuestion()}


      

        {/* Options */}
        {renderOptions()}

        {/* Options 2 */}
        {renderOptions2()}

        {renderCheckButton()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Result Modal */}
        <Modal style={styles.container} transparent={true} visible={showScoreModal}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              width: width,
              padding: 5,
              paddingTop: 20,
            }}>
            <ScrollView
              style={{
                width: width,
                height: height,
              }}>
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 22,
                  width: '80%',
                  height: 30,
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
                  RESTART
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      
      </ImageBackground>
      </ScrollView>
    
  );
};

export default Quiz;

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
    width: width,
    height: height,

}
});
