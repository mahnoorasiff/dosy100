import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
  ScrollView,
  Dimensions
} from 'react-native';
import { COLORS, SIZES } from '../components/constants/theme';
import data from '../src/data/QuizData';
import { Ionicons } from '@expo/vector-icons';
const width= Dimensions.get("window").width;
const height = Dimensions.get("window").height;


const Quiz = () => {
  const allQuestions = data;
  const [q_cat, setq_cat] = useState(
    'https://i.postimg.cc/NjS5Pjgd/pragmatics.png'
  );

  const [e_val, sete_val] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const test_i = './8.png';
  const test_url = 'https://i.postimg.cc/MTKgbFjz/8.png';

  //change to showResultModal and then make a function for rendering the result
  const [showScoreModal, setShowScoreModal] = useState(false);

  const [showResultModal, setResultModal] = useState(false);

  const [answers, setanswers] = useState([]);

  const [pragCount, setpragCount] = useState(0);
  const [pragcolor, setpragcolor] = useState('blue');
  const [pragicon, setpragicon] = useState(
    'https://i.postimg.cc/50nygj2T/checkmark-png-25953.png'
  );

  const [playCount, setplayCount] = useState(0);
  const [playcolor, setplaycolor] = useState('blue');
  const [playicon, setplayicon] = useState(
    'https://i.postimg.cc/50nygj2T/checkmark-png-25953.png'
  );

  const [comprehCount, setcomprehCount] = useState(0);
  const [comprehcolor, setcomprehcolor] = useState('blue');
  const [comprehicon, setcomprehicon] = useState(
    'https://i.postimg.cc/50nygj2T/checkmark-png-25953.png'
  );

  const [talkCount, settalkCount] = useState(0);
  const [talkcolor, settalkcolor] = useState('blue');
  const [talkicon, settalkicon] = useState(
    'https://i.postimg.cc/50nygj2T/checkmark-png-25953.png'
  );

  const [hearCount, sethearCount] = useState(0);
  const [hearcolor, sethearcolor] = useState('blue');
  const [hearicon, sethearicon] = useState(
    'https://i.postimg.cc/50nygj2T/checkmark-png-25953.png'
  );

  const validateResult = (selectedOption) => {
    console.log('all questions', allQuestions);
    console.log('..', allQuestions[currentQuestionIndex]['correct_option']);

    console.log(selectedOption);
    setanswers((answers) => answers.concat(selectedOption));
    console.log(answers);

    if (answers[0] == 'NO') {
      setpragCount(pragCount + 1);
    }

    if (answers[1] == 'NO') {
      setpragCount(pragCount + 1);
    }

    if (answers[2] == 'NO') {
      setpragCount(pragCount + 1);
    }

    
    if (answers[3] == 'NO') {
      setpragCount(pragCount + 1);
    }

    if (answers[4] == 'NO') {
      setpragCount(pragCount + 1);
    }

    if (answers[5] == 'NO') {
      setpragCount(pragCount + 1);
    }
    

    if (answers[6] == 'NO') {
      setpragCount(pragCount + 1);
    }

    //play
    if (answers[7] == 'NO') {
      setplayCount(playCount + 1);
    }

    if (answers[8] == 'NO') {
      setplayCount(playCount + 1);
    }

    if (answers[9] == 'NO') {
      setplayCount(playCount + 1);
    }

    if (answers[10] == 'NO') {
      setplayCount(playCount + 1);
    }

    if (answers[11] == 'NO') {
      setplayCount(playCount + 1);
    }

    // comprehension
    if (answers[12] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[13] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[14] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[15] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[16] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[17] == 'YES') {
      setcomprehCount (comprehCount + 1);
    }

 
    if (answers[18] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }

    if (answers[19] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }


    if (answers[20] == 'NO') {
    setcomprehCount (comprehCount + 1);
    }


    if (answers[21] == 'NO') {
    setcomprehCount (comprehCount + 1);
    }

    if (answers[22] == 'NO') {
      setcomprehCount (comprehCount + 1);
    }


    //talking 
    if (answers[23] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[24] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[25] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[26] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[27] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[28] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[29] == 'NO') {
      settalkCount(talkCount + 1);
    }

    if (answers[30] == 'NO') {
      settalkCount(talkCount + 1);
    }

    
    //hearing
    if (answers[31] == 'NO') {
      sethearCount (hearCount + 1);
    }

    if (answers[32] == 'NO') {
      sethearCount (hearCount + 1);
    }


    setIsOptionsDisabled(true);

    //add continued checks

    // Show Next Button
    setShowNextButton(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      {
        colorset();
      }
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  //Re-take the survey
  const restartQuiz = () => {
    setq_cat("https://i.postimg.cc/zBT06Zgn/Whats-App-Image-2021-09-27-at-20-39-06-1.jpg");
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);
    setanswers([]);
    setpragCount(0);
    setplayCount(0);
    setcomprehCount(0);
    settalkCount(0);
    sethearCount(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const imagetbd = () => {
    {
      console.log(currentQuestionIndex);
    }
    if (currentQuestionIndex < 30) {
      sete_val(allQuestions[currentQuestionIndex + 2].category);
      if (e_val == 'Pragmatics') {
        setq_cat(
          'https://i.postimg.cc/NjS5Pjgd/pragmatics.png'
        );
      } else if (e_val == 'Play') {
        setq_cat(
          'https://i.postimg.cc/ncdsB1Nb/play.png'
        );
      } else if (e_val == 'Comprehension') {
        setq_cat(
          'https://i.postimg.cc/RVC6WYsL/comprehension.png'
        );
      } else if (e_val == 'Hearing') {
        setq_cat(
          'https://i.postimg.cc/Dw8SgXKW/hear.png'
        );
      } else if (e_val == 'Talking') {
        setq_cat(
          'https://i.postimg.cc/pdjpNMrR/talking.png'
        );
      }
    }
  };

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 10
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              opacity: 0.6,
              marginRight: 2,
            }}>
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        <View>
          <TouchableOpacity>
            <View style={styles.oneAvatar}>
              <Image style={styles.imageofava} source={{ uri: q_cat }}></Image>
            </View>
          </TouchableOpacity>

          <Text
            style={{
              color: 'orange',
              justifyContent: 'center',
              alignSelf: 'center',
              fontWeight: 'bold',
              paddingBottom:25,
            }}>
            {allQuestions[currentQuestionIndex]?.category}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 28,
          }}>
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    );
  };

  const renderOptions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginHorizontal: 50,
          alignItems: 'center',
        }}>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateResult(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
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
              height: 60,
              borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              imagetbd();
              handleNext();
            }}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 25,
            }}>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={82}
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
    outputRange: ['0%', '100%'],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: '100%',
          height: 20,
          borderRadius: 20,
          backgroundColor: '#00000020',
        }}>
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}></Animated.View>
      </View>
    );
  };

  //Function to change category colors and icons...change 2 to as you want
  const colorset = () => {
    if (pragCount > 3) {
      setpragcolor('orange');
      setpragicon('https://i.postimg.cc/9XBXGDnB/pngwing-com.png');
    } else {
      setpragcolor('blue');
      setpragicon('https://i.postimg.cc/50nygj2T/checkmark-png-25953.png');
    }

    if (playCount > 2) {
      setplaycolor('orange');
      setplayicon('https://i.postimg.cc/9XBXGDnB/pngwing-com.png');
    } else {
      setplaycolor('blue');
      setplayicon('https://i.postimg.cc/50nygj2T/checkmark-png-25953.png');
    }

    if (comprehCount > 5) {
      setcomprehcolor('orange');
      setcomprehicon('https://i.postimg.cc/9XBXGDnB/pngwing-com.png');
    } else {
      setcomprehcolor('blue');
      setcomprehicon('https://i.postimg.cc/50nygj2T/checkmark-png-25953.png');
    }

    if (talkCount > 4) {
      settalkcolor('orange');
      settalkicon('https://i.postimg.cc/9XBXGDnB/pngwing-com.png');
    } else {
      settalkcolor('blue');
      settalkicon('https://i.postimg.cc/50nygj2T/checkmark-png-25953.png');
    }

    if (hearCount > 1) {
      sethearcolor('orange');
      sethearicon('https://i.postimg.cc/9XBXGDnB/pngwing-com.png');
    } else {
      sethearcolor('blue');
      sethearicon('https://i.postimg.cc/50nygj2T/checkmark-png-25953.png');
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: 'relative',
        }}>
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

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
              <TouchableOpacity>
                <View style={styles.oneAvatar}>
                  <Image
                    style={styles.imageofava}
                    source={{
                      uri:
                        'https://i.postimg.cc/XYPzG06b/report-icon-13315.png',
                    }}></Image>
                </View>
              </TouchableOpacity>

              <View style={styles.view1}>
                <TouchableOpacity style={styles.to1}>
                  <View
                    style={styles.v2}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <View style={styles.oneAvatar1}>
                          <Image
                            style={styles.imageofava1}
                            source={{ uri: pragicon }}></Image>
                        </View>
                      </TouchableOpacity>

                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: pragcolor,
                        }}>
                        {pragCount > 2 ? 'PRAGMATICS' : 'PRAGMATICS'}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: "100%",
                        height: "100%",
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          width: "100%",
                          height: "100%"
                        }}>
                        {pragCount < 2
                          ? 'Your child reflects good understanding of emotions, hypothetical scenarios and how to follow instructions to a certain extent. Make it a routine to give them independant task to a point it becomes seccond nature to them to c arry out tasks independantly. '
                          : 'There are some potential issues with your child. Their ability to use language for different social situations is very weak. If not paid atten tion to time, it will delay their understanding of basic emotions and reactions to them. Talk more to your child using hypothetical stories to get attention of them and get them thinking.'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.view1}>
                <TouchableOpacity style={styles.to1}>
                  <View
                    style={styles.v2}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <View style={styles.oneAvatar1}>
                          <Image
                            style={styles.imageofava1}
                            source={{ uri: playicon }}></Image>
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: playcolor,
                        }}>
                        {playCount > 2 ? 'PlAY' : 'PLAY'}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          width: '100%',
                          height: '100%',
                        }}>
                        {playCount < 2
                          ? 'Your child is fairly active for their age. It is encouraged to introduce more games that envolve challenging tasks like puzzles, legos etc. However, the answers depict a healthy environment that keeps your child engaged and it should be further enhanced for better developement. '
                          : ' According to the answers provided your child seems to have trouble with play activities. Play is very essential to children optimum developement because i8t contributes to their cognitive, physical and social development. It is encourages that family members should initiate play activities with the child to promote liking and confidence for the game. This will encourage them to play with others eventually' }
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.view1}>
                <TouchableOpacity style={styles.to1}>
                  <View
                    style={styles.v2}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <View style={styles.oneAvatar1}>
                          <Image
                            style={styles.imageofava1}
                            source={{ uri: comprehicon }}></Image>
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: comprehcolor,
                        }}>
                        {comprehCount > 2 ? 'COMPREHENSION' : 'COMPREHENSION'}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          width: '100%',
                          height: '100%',
                        }}>
                        {comprehCount < 5
                          ? 'Your child is doing good for their age. It shows they actively interact with people around them and it is futher encouraged to motivate your child into reading and talking more. '
                          : 'The potential issue your child has with language comprehension is limited knowledge of vocabulary. It is not to be neglected. This will arise problems in further speech developement.'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.view1}>
                <TouchableOpacity style={styles.to1}>
                  <View
                    style={styles.v2}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <View style={styles.oneAvatar1}>
                          <Image
                            style={styles.imageofava1}
                            source={{ uri: talkicon }}></Image>
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: talkcolor,
                        }}>
                        {talkCount > 2 ? 'TALK' : 'TALK'}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          width: '100%',
                          height: '100%',
                        }}>
                        {talkCount < 4
                          ? 'At around age considering special needs your child has potential to use words longer than 4 sylabels and use correct grammatical sentence in everyday conversations. Try talking to your children using diferent words everyday to raise their vocbulary.'
                          : ' At around this age your child be using more extensive words. Your child should be using intricate sentences to deliver their feelings. Make them familiar with conjuctions and subordinations like because, so, if and when etc.' }
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.view1}>
                <TouchableOpacity style={styles.to1}>
                  <View
                    style={styles.v2}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity>
                        <View style={styles.oneAvatar1}>
                          <Image
                            style={styles.imageofava1}
                            source={{ uri: hearicon }}></Image>
                        </View>
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: 'bold',
                          color: hearcolor,
                        }}>
                        {hearCount > 2 ? 'HEAR' : 'HEAR'}
                      </Text>
                    </View>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%',
                        marginTop: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          alignItems: 'center',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          width: '100%',
                          height: '100%',
                        }}>
                        {hearCount < 1
                          ? ' Your child has good hearing abilities as per answers provided. However, it is adviced to keep them away from loud noises. Also talk in a minimum pace and medium toned voice for them to  better pick your words. '
                          : 'Your child has potential issue with hearing. Children brain need aural stimulation from day one to learn to disinguish sounds and recognize speech'}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {/* Retry Quiz button,, link this part to a button or reset the survey to initial state */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 22,
                  width: '80%',
                  height: 30,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems:"center",
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    justifyContent:"center",
                    alignItems:"center",
                    color: COLORS.white,
                    opacity:0.8,
                    fontSize: 18,
                    height:25,
                    
                  }}>
                    Save Report
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>

        {/* Background Image */}
        <Image
          source={require('../assets/DottedBG.png')}
          style={{
            width: SIZES.width,
            height: 124,
            zIndex: -1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            opacity: 0.5,
          }}
          resizeMode={'contain'}
        />
      </View>
    </SafeAreaView>
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
    width: 20,
    height: 20,
    //borderColor: 'red',
    //borderWidth: 1,
    //justifyContent: 'center',
    //alignSelf: 'center',
    borderRadius: 200,
    //margin: 22,
    paddingRight: 10,
  },

  imageofava1: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 200,
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
});
