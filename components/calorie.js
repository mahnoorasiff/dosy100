import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import Constants from 'expo-constants';
import DropDownPicker from 'react-native-dropdown-picker';


const calorie = ({ route, navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [gender, setGender] = useState([
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]);

  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(null);
  const [activity, setActivity] = useState([
    {label: 'Low', value: 'low'},
    {label: 'Moderate', value: 'mod'},
    {label: 'High', value: 'high'}
  ]);
  const [age, setAge] = useState();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [cvalue, setCvalue] = useState("");
  const [showModal, setShowModal] = useState(false);

  const updateAge = (val) => {
    if (val > 0 || val == "") {
      setAge(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const updateWeight = (val) => {
    if (val > 0 || val == "") {
      setWeight(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const updateHeight = (val) => {
    if (val > 0 || val == "") {
      setHeight(val * 1);
    } else {
      alert("Please enter value greater then 0");
    }
  };

  const updateActivity = (val) => {
    console.log("update act",val)
    if (val == "low") {
      
      setValue2(1.2 * 1);
    } else if (val == "mod") {
      
      setValue2(1.3 * 1);

    } else if (val == "high") {
      
      setValue2(1.4 * 1);
    }
  };

  const calcCvalue = () => {
    var answer
    if (value == "male") {
      console.log("activity val", value2)
      answer =(66.5 + 13.8 * weight + (5 * height) / (6.8 * age) * value2);
      answer = Math.round(answer);
      console.log("answer", answer)
      setCvalue(answer)
  
    } else if (value == "female") {
       answer = (655.1 + 9.6 * weight + (1.9 * height) / (4.7 * age)) * value2;
       answer = Math.round(answer);
       setCvalue(answer) ;
    }
    setShowModal(true);
  };

  return (
    <ScrollView >
      <View style={styles.container}>
      <ImageBackground
                    style={styles.bgView}
                    source={require("./screenspics/caloriebg.png")}>

        <Modal
          visible={showModal}
          transparent
          onRequestClose={() => setShowModal(false)}
          animationType="fade"
        >
          <View style={styles.centered_model}>
            <View style={styles.modalmainview}>
              <View style={styles.modal_title}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>CALORIES</Text>
              </View>
              <View style={styles.modal_body}>
                
                  <Text style={{ fontWeight: "400", letterSpacing:"0.3", fontSize: 23 }}>
                   You need an intake of {cvalue} calories per day
                  </Text>
                
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

  
          <View style={{ flexDirection: "row" , justifyContent:"space-evenly" , alignItems:"center",  marginTop:"18%"}}>
            <View >
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder="Enter Age"
              onChangeText={(val) => updateAge(val)}
            />
          </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent:"space-evenly"  , alignItems:"center" }}>
            <View >
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder="Enter weight in kg"
              onChangeText={(val) => updateWeight(val)}
            />
          </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent:"space-evenly"  , alignItems:"center" }}>
            <View>
            
            <TextInput
              keyboardType="numeric"
              style={styles.inputStyle}
              placeholder="Enter height in cm"
              onChangeText={(val) => updateHeight(val)}
            />
          </View>
          </View>

            <View style={{justifyContent:"center", alignItems:"center"}}>
          
              <Text style={{ alignSelf: 'center',fontSize:16.5, fontWeight:"500", 
              letterSpacing:0.5,color:"#875097"}}>Choose Gender :</Text>
            
              <DropDownPicker 
      open={open}
      value={value}
      items={gender}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setGender}
      dropDownDirection="AUTO"
      bottomOffset={200}
      style={{
        backgroundColor: "#fffeea",
        alignSelf:"center",
        width:220, height:50,
        margin:15
      }}
      dropDownContainerStyle={{
        backgroundColor: "#D3D3D3",
        width:220,
        height:100,
        alignSelf:"center",
      }}


    />
            </View>

      
            <View style={{justifyContent:"center", alignItems:"center"}}>
          
              <Text style={{ fontSize:16.5, fontWeight:"300",color:"#875097",fontWeight:"500",
               letterSpacing:0.5 }}>Choose Activity Style :</Text>
            
              <DropDownPicker 
      open={open2}
      value={value2}
      items={activity}
      setOpen={setOpen2}
      setItems={setActivity}
      dropDownDirection="AUTO"
      bottomOffset={200}
      onChangeValue={(val) => {
                  updateActivity(val)
                }}
      setValue={setValue2}
                style={{
                  backgroundColor: "#fffeea",
                  alignSelf:"center",
                  width:220, height:50, margin:15
                }}
                dropDownContainerStyle={{
                  backgroundColor: "#D3D3D3",
                  width:220,
                  height:150,
                  alignSelf:"center"
                }}

                />
                
            </View>
        
  
        <View>
          <TouchableOpacity
            onPress={() => {
              calcCvalue();
            }}
            //style={styles.touchbutton}
            style={
              !age || !weight || !height
                ? styles.disabledbutton
                : styles.touchbutton
            }
            disabled={!age || !weight || !height}
          >
            <View >
              <Text style={styles.buttontext}>Calculate</Text>
            </View>
          </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
    </ScrollView>
  );
}

export default calorie;

const styles = StyleSheet.create({
  container: {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor: "#d6c190", 
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

  

  
  inputStyle: {
    borderColor: "#777",
    borderWidth: 1,
    padding: 18,
    marginBottom: 12,
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
      backgroundColor: "#fffeea",
      
  },

  
  
  touchbutton: {

    marginTop:"6%",
    padding:16,
    backgroundColor: "#cab49a",
    opacity:0.95,
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:"35%",
    
    borderRadius: 8,
  


  },
  disabledbutton: {
    marginTop:"2%",
    padding:15,
    backgroundColor:"#ded0c1",
    opacity:0,
    width: "35%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft:Dimensions.get('window').width/3,
    borderRadius: 10,
    color: "white",
    //borderWidth: 3,
    
  },
  buttontext: {
    fontWeight: "400",
    fontSize: 20,
  },
  modalmainview: {
    width: 275,
    height: 260,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  centered_model: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modal_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AFDAA3",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: "#cab49a",
    opacity:0.8
  },
  modal_body: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#af8d67",
    opacity:0.7
  },
  goback_modalbutton: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cab49a",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    opacity:0.8
  },


  
});

