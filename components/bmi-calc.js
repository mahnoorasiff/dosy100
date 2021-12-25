import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ImageBackground,
  Dimensions
} from "react-native";
import Constants from 'expo-constants';
import { ScrollView } from "react-native-gesture-handler";



export default function bmi_calc() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bmi, setBmi] = useState();
  const [bmiMessage, setBmiMessage] = useState();
  const [start_weight, setStart_weight] = useState();
  const [end_weight, setEnd_weight] = useState();

  const updateWeight = (val) => {
    if (val > 0 || val == "") {
      setWeight(val * 1);
    } else {
      alert("Please enter a value greater then 0");
    }
  };

  const updateHeight = (val) => {
    if (val > 0 || val == "") {
      setHeight(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const calculateBMI = () => {
    var ans = weight / (height * height);
    ans = Math.round(ans * 10) / 10;
    var s_weight = 18.5 * (height * height);
    var e_weight = 24.9 * (height * height);
    s_weight = Math.round(s_weight * 100) / 100;
    e_weight = Math.round(e_weight * 100) / 100;
    setBmi(ans);
    setStart_weight(s_weight);
    setEnd_weight(e_weight);

    if (ans >= 18.5 && ans <= 24.9) {
      setBmiMessage("Normal Weight");
    } else if (ans <= 18.4) {
      setBmiMessage("Under Weight");
    } else if (ans >= 25 && ans <= 29.9) {
      setBmiMessage("Over Weight");
    } else if (ans >= 30 && ans <= 34.9) {
      setBmiMessage("Obesity (Class 1)");
    } else if (ans >= 35 && ans <= 39.9) {
      setBmiMessage("Obesity (Class 2)");
    } else if (ans >= 40) {
      setBmiMessage("Obesity (Class 3)");
    }
    setShowModal(true);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground
                    style={styles.bgView}
                    source={require("./screenspics/bmibg.png")}>

      <Modal
        visible={showModal}
        transparent
        onRequestClose={() => setShowModal(false)}
        animationType="fade"
      >
        <View style={styles.centered_model}>
          <View style={styles.modalmainview}>
            <View style={styles.modal_title}>
              <Text
                style={{ fontWeight: "bold", fontSize: 25, color: "white" }}
              >
                BMI
              </Text>
            </View>
            <View style={styles.modal_body}>
              <View style={styles.cvalueModal}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>{bmi}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  {bmiMessage}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    color: "#b8b4b4",
                    marginTop: 5,
                    padding: 15,
                  }}
                >
                  Your Normal Weight Range is {start_weight}
                  kg to {end_weight} kg
                </Text>
              </View>
            </View>
            <Pressable
              style={styles.goback_modalbutton}
              onPress={() => setShowModal(false)}
              android_ripple={{ color: "#fff" }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  alignSelf: "center",
                }}
              >
                GO BACK
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>




      <View style={{ flexDirection: "row" , justifyContent:"space-evenly" , alignItems:"center", 
      marginTop:"35%"
      }}>
            <View >
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder="Enter Weight in kg"
              returnKeyType="next"
              onChangeText={(val) => updateWeight(val)}
            />
          </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent:"space-evenly"  , alignItems:"center" }}>
            <View >
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder="Enter height in meters"
              keyboardType="numeric"
              returnKeyType="done"
              onChangeText={(val) => updateHeight(val)}
            />
          </View>
          </View>






      <View>
        <TouchableOpacity
          onPress={() => {
            calculateBMI();
          }}
          //style={styles.touchbutton}
          style={
            !weight || !height ? styles.disabledbutton : styles.touchbutton
          }
          disabled={!weight || !height}
        >
          <View>
            <Text style={styles.buttontext}>Calculate</Text>
          </View>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: "#74a3ff", //pastel green background
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    
  },

  bgView: {
  resizeMode:"cover",  
  width:"100%",
  height:"100%",
  
  },

  inputHandling: {
    flexDirection: "row",
  },

  calculateCal: {
    marginTop: "10%",
    padding: "3%",
    backgroundColor: "#AFDAA3",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "30%",
    borderRadius: 10,
    color: "white",
  },


  inputStyle: {
    borderColor: "#777",
    borderWidth: 1,
    padding: 22,
    marginBottom: 20,
    width: 250,
    borderRadius:10,
    //alignContent: 'center',
    alignSelf: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 5, //android shadow property
    //backgroundColor: "#F7F4F1",
      backgroundColor: "#EEE8AA",
      opacity:0.95
  },
  card2: {
    //shadowColor: "black",
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 10,
    //shadowOpacity: 0.26,
    //elevation: 5, //android shadow property
    backgroundColor: "#EEFBDD",
    
    margin: "1%",
    width: "40%",
    color: "#4f6349",
  },
  pick: {
    width: 150,
    borderColor: "blue",
    borderWidth: 2,
    textAlign: "center",
    alignSelf: "center",
    padding: 20,
  },
  pickview: {
    borderWidth: 1,
    borderColor: "black",
    //borderRadius: 4
    alignSelf: "center",
    width: 150,
    marginLeft: 50,
  },
  touchbutton: {
    marginTop:"10%",
    height:60,
    backgroundColor: "#ffb7ba",
    width: "46%",
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    opacity:0.88
  },
  disabledbutton: {
    padding: "5%",
    backgroundColor: "#6b8563",
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "33%",
    marginTop: "15%",
    borderRadius: 10,
    color: "white",
    borderColor: "blue",
    opacity:0
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },

  modalmainview: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#AFDAA3",
    borderRadius: 20,
  },
  centered_model: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  modal_title: {
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFDAA3", //#AFDAA3 pastel green
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modal_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFDAA3",
  },
  goback_modalbutton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4f6349",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cvalueModal: {
    backgroundColor: "white",
    width: 240,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#d4d2d2",
  }
});
