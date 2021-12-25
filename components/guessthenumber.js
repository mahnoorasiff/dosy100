import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity, Modal, FlatList, Text, StyleSheet, Pressable, ImageBackground } from 'react-native';
import * as Speech from 'expo-speech';


export default function GuessNumb({ navigation }) {

  const [isModalVisible2, setModalVisible2] = useState(true);

  const [data, setData] = useState([
    { value: '1', imageSource: require('./screenspics/duck1.png') },
    { value: '2', imageSource: require('./screenspics/duck2.png') },
    { value: '3', imageSource: require('./screenspics/duck3.png') },
    { value: '4', imageSource: require('./screenspics/duck4.png') },
    { value: '5', imageSource: require('./screenspics/duck5.png') },
    { value: '6', imageSource: require('./screenspics/duck6.png') },
    { value: '7', imageSource: require('./screenspics/duck7.png') },
    { value: '8', imageSource: require('./screenspics/duck8.png') },
    { value: '9', imageSource: require('./screenspics/duck9.png') },
    { value: '10', imageSource: require('./screenspics/duck10.png') }
  ]);


  const numb = 12;
  const [currenQuesiton, setcurrentquesiton] = useState(1);
  const [count, setcount] = useState(1)

  const nextQuestion = () => {
    console.log("cq", currenQuesiton)
    console.log("count", count)
    setcount(count + 1)
    if (currenQuesiton < 11) {
      const x = Math.round((Math.random() * 9) + 1);
      setcurrentquesiton(x);
      console.log("x", x)
      setIsRight('')
    }

  }


  //   useEffect(() => {
  // Speech.speak("Count the number of ducks", {rate:0.7});
  //    }, [])


  const CorrectAnswer = () => {
    return (
      <View style={styles.container}>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={true}

        >
          <View style={styles.modal}>
            {Speech.speak("Great Job ", { rate: 0.7 })}
            <Text style={{ fontWeight: "300", fontSize: 28, color: "white" }}>Great Job!!</Text>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => nextQuestion()}
            >
              <Text style={{ color: "white", padding: 5 }}>Continue</Text>
            </Pressable>

          </View>
        </Modal>

      </View>
    );
  }

  const toggleModal = (visible) => {
    console.log("pressed")
    setModalVisible2(!visible)
  }


  const WrongAnswer = () => {
    return (
      <View style={styles.container}>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={isModalVisible2}
          onRequestClose={() => { console.log("Modal has been closed.") }}
        >

          <View style={styles.modal2}>
            {Speech.speak("Try Again", { rate: 0.7 })}
            <Text style={{ fontWeight: "bold", letterspacing: "1.5", color: "white", fontSize: 28 }}>Count Again!</Text>
            <TouchableOpacity
              style={{ marginTop: 30, borderRadius: 10, padding: 15, backgroundColor: "#E44B73" }}
              onPress={() => toggleModal(isModalVisible2)}
            >
              <Text style={{ color: "white" }}>Try again</Text>
            </TouchableOpacity>

          </View>
        </Modal>

        <View styles={styles.wrongbox}>
          <Text style={{ color: "red", fontSize: 14 }}> {selectedValue} is incorrect, count again!</Text>
        </View>
      </View>

    );
  }

  //when atleast 12 questions have been displayed, render "LEVEL COMPLETE" modal and go back to the home screen.(incomplete)

  const LevelComplete = () => {
    return (
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

    );

  }



  //answer value
  const [selectedValue, setSelectedValue] = useState()
  const [isRight, setIsRight] = useState('')


  const checkAnswer = (value) => {
    console.log(value)
    if (value == currenQuesiton) {

      setIsRight(true);
      setSelectedValue(value)


    } else {

      setIsRight(false)
      setSelectedValue(value)

    }
  }

  const renderQuestion = ({ item, index }) => {

    if (item.value == selectedValue) {
      return (
        <TouchableOpacity onPress={() => { checkAnswer(item.value) }} style={{ width: 66, height: 62, backgroundColor: '#FBD46D', marginHorizontal: 2.5, marginVertical: 2.5, justifyContent: 'center', borderRadius: 15, position: "relative" }}>
          <Text style={{ fontSize: 30, alignSelf: 'center', color: 'white', paddingHorizontal: 2, paddingVertical: 2 }}>{item.value}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity onPress={() => { checkAnswer(item.value) }} style={{ width: 66, height: 62, backgroundColor: '#0F4C75', shadowRadius: 3, marginHorizontal: 2.5, marginVertical: 2.5, justifyContent: 'center', borderRadius: 15, position: "fixed" }}>
          <Text style={{ fontSize: 30, alignSelf: 'center', color: 'white', paddingHorizontal: 2, paddingVertical: 2 }}>{item.value}</Text>
        </TouchableOpacity>
      )
    }
  }
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#FADBD8' }}>
      <View style={{ flex: 1 }}>

        <ImageBackground source={data[currenQuesiton - 1].imageSource} style={{ width: "100%", height: "100%", alignSelf: 'center' }} >

          <View style={[{ marginTop: 175, flex: 0.4, justifyContent: 'center', alignItems: "center" }]}>

            <FlatList
              data={data}
              style={{ alignSelf: 'center' }}
              numColumns={Math.ceil(data.length / 2)}
              keyExtractor={(item, index) => String(index)}
              renderItem={renderQuestion} />

            <View style={{ flex: 0.5 }}>

              {

                isRight == true && count < numb ?
                  CorrectAnswer()

                  :

                  isRight === false && count < numb ?

                    WrongAnswer()


                    :

                    count == numb ?
                      LevelComplete()

                      :

                      <Text> </Text>
              }


            </View>


          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>

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

  wrongbox: {
    padding: 35,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,

  },
});  