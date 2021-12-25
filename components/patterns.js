import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text,Modal, Animated,StyleSheet, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Speech from 'expo-speech';
import { set } from 'react-native-reanimated';


export default function Patterns({navigation}) {

  const [data, setData] = useState([
    { bg: require('./screenspics/patternscreen1.png') },
    { bg: require('./screenspics/patternscreen2.png') },
    { bg: require('./screenspics/patternscreen3.png') },
    { bg: require('./screenspics/patternscreen4.png') },
    { bg: require('./screenspics/patternscreen5.png') },
    { bg: require('./screenspics/patternscreen6.png') },
    { bg: require('./screenspics/patternscreen7.png') },
    { bg: require('./screenspics/patternscreen8.png') },
    { bg: require('./screenspics/patternscreen9.png') },
    { bg: require('./screenspics/patternscreen10.png') },
    { bg: require('./screenspics/patternscreen11.png') },
  ]);

  const [data2, setData2] = useState([
    {
      value: '9>6',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },

        {
          key: 1,
          opt: "equal"
        },

        {
          key: 2,
          opt: "bigl"
        }

      ],
      correct_option: "bigl"
    },

    {
      value: '8=8',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },

        {
          key: 1,
          opt: "equal"
        },

        {
          key: 2,
          opt: "bigl"
        }

      ],
      correct_option: "equal"
    },

    //3
    {
      value: '4< 5',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },

        {
          key: 1,
          opt: "equal"
        },

        {
          key: 2,
          opt: "bigl"
        }

      ],
      correct_option: "bigr"
    },

    //4
    {
      value: '4<5',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },

        {
          key: 1,
          opt: "equal"
        },

        {
          key: 2,
          opt: "bigl"
        }

      ],
      correct_option: "bigr"
    },

    //5
    {
      value: '3=3',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "equal"
    },

    //6  
    {
      value: '6<9',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "bigr"
    },
    //7
    {
      value: '7>5',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "bigl"
    },
    //8
    {
      value: '10>8',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "bigl"
    },

    //9
    {
      value: '6>5',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "bigl"
    },
    //10

    {
      value: '3=3',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "equal"
    },

    //11                  
    {
      value: '6>4',
      imageSource: [require('./screenspics/answer1icon.png'), require('./screenspics/answer3icon.png'),
      require('./screenspics/answer2icon.png')],
      options: [
        {
          key: 0,
          opt: "bigr"
        },
        {
          key: 1,
          opt: "equal"
        },
        {
          key: 2,
          opt: "bigl"
        }
      ],
      correct_option: "bigl"
    },


  ]);


  const [currenQuesiton, setcurrentquesiton] = useState(0);
  const [displaysign, setdisplaysign] = useState(false)
  const [displayindex, setdisplayindex] = useState()
  const [complete, setComplete] = useState(1);
  const [answers, setanswers] = useState([])

  const nextQuestion = () => {
    console.log("cq", currenQuesiton)
    if (currenQuesiton < 10) {
      setcurrentquesiton(currenQuesiton + 1);
      setdisplaysign(false)
    }
    else {
      console.log("level complete")
      setComplete(-1)
      // setTimeout(() => { alert('Level Completed!'); }, 1500);

      // setTimeout(() => { navigation.goBack() }, 3500);
      
    }
    Animated.timing(progress, {
      toValue: currenQuesiton + 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const validateResult = (selectedOption) => {

    console.log("..", data2[currenQuesiton]['correct_option'])

    console.log(selectedOption)
    setanswers(answers => answers.concat(selectedOption))
    if (selectedOption.opt == data2[currenQuesiton]['correct_option']) {
      console.log("right answer")
      alert("CORRECT")
      {Speech.speak("Great Job", { rate: 0.7 })}
      setdisplayindex(selectedOption.key)
      setdisplaysign(true)

    }
    else {
      alert("Incorrect")
      {Speech.speak("Try Again", { rate: 0.7 })}
    }

  }



  const renderOptions = () => {
    console.log("current", currenQuesiton, data2[currenQuesiton]?.options);
    console.log(displayindex)
    return (

      <ImageBackground source={data[currenQuesiton].bg} style={{
        flex: 1, resizeMode: "contain",
        height: Dimensions.get('window').height, width: Dimensions.get('window').width
      }}>
        {renderProgressBar()}
        <View style={{ flex: 1.4, flexDirection: "row", alignItems: "flex-end", justifyContent: "space-evenly" }}>
          {displaysign == true ?

            <Image style={{ height: 130, width: 130, marginTop: 180, marginLeft: 11, borderRadius: 100, resizeMode: "contain" }}
              source={data2[currenQuesiton]?.imageSource[displayindex]} />

            :
            <Text> </Text>
          }


        </View>

        <View key={currenQuesiton} style={{ flex: 1, flexDirection: "row", flexWrap: "no-wrap", justifyContent: 'center', marginBottom: 15, marginHorizontal: 5, alignItems: 'flex-end' }}>
          {
            data2[currenQuesiton]?.options.map(option => (
              <TouchableOpacity
                onPress={() => validateResult(option)}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  position: "relative",
                  borderColor: "grey",
                  height: 100, borderRadius: 100,
                  flexDirection: 'row',
                  alignItems: 'center', justifyContent: 'center',
                  width: Dimensions.get('window').width / 3.5,
                  margin: 3,


                }} >

                <Image source={data2[currenQuesiton]?.imageSource[option.key]}

                  style={{ height: "100%", width: "100%", borderRadius: 100, resizeMode: "cover", flexWrap: "wrap" }} />

              </TouchableOpacity>

            ))}
          {displaysign == true && complete== 1?
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity onPress={() => { nextQuestion() }}
                style={{
                  justifyContent: "flex-end", alignItems: "flex-end",
                }}>

                <Ionicons name="caret-forward-outline" size={65} color="green" />
              </TouchableOpacity>
            </View>

            : displaysign==true && complete == -1 ?
            <View style={styles.container}>

            <Modal
              animationType={"fade"}
              transparent={true}
              visible={true}
            >
    
              <View style={{ ...styles.modal2, backgroundColor: "#F9E79F" }}>
              {Speech.speak("Level Completed, let's try another exercise", { rate: 0.85 })}
                <Text style={{ fontWeight: "600", fontSize: 18 }}>LEVEL COMPLETED!!</Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}
                  style={{ marginTop: 30, borderRadius: 10, padding: 15, backgroundColor: "#E44B73" }}
                >
                  <Text style={{ color: "white" }}>OK</Text>
    
                </TouchableOpacity>
    
              </View>
            </Modal>
          </View>
  
            
            
            :<Text>
            </Text>

          }
        </View>
      </ImageBackground>

    )

  }

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, data.length],
    outputRange: ['0%', '100%']
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
          backgroundColor: "blue"
        }, {
          width: progressAnim
        }]}>

        </Animated.View>

      </View>
    )
  }




  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {renderOptions()}
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#9FE2BF",
    height: 250,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 150,
    marginLeft: 40,

  },

  modal2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F5B7B1",
    height: 250,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 150,
    marginLeft: 40,

  },


  text: {
    color: '#3f2949',
    marginTop: 10
  },
  button: {
    marginTop: 30,
    borderRadius: 10,
    padding: 18,
    elevation: 2,

  },
  buttonOpen: {
    backgroundColor: "#0E6655"
  },

});  