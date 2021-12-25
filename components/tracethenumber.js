import React, { useState , useRef, useEffect} from "react";
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from 'expo-speech'; 

import Signature from "react-native-signature-canvas";

const width= Dimensions.get('window').width
const height= Dimensions.get('window').height


export default function Sign  ({ navigation})  {

  useEffect(() => {
    console.log("re-rendering");
       }, [currentQuestion]);

  const ref = useRef();
 const [data, setData] = useState([{ value: '0', imageSource: require('./screenspics/0screen.png'),  speaker:"zero" },
    { value: '1', imageSource: require('./screenspics/1screen.png'), speaker:"One" },
    { value: '2', imageSource: require('./screenspics/2screen.png'), speaker:"Two" },
    { value: '3', imageSource: require('./screenspics/3screen.png'), speaker:"Three" },
    { value: '4', imageSource: require('./screenspics/4screen.png'), speaker:"Four" },
    { value: '5', imageSource: require('./screenspics/5screen.png'), speaker:"Five" },
    { value: '6', imageSource: require('./screenspics/6screen.png'), speaker:"Six" },
    { value: '7', imageSource: require('./screenspics/7screen.png'), speaker:"Seven" },
    { value: '8', imageSource: require('./screenspics/8screen.png'), speaker:"Eight" },
    { value: '9', imageSource: require('./screenspics/9screen.png'), speaker:"Nine" },
    { value: '10', imageSource: require('./screenspics/10screen.png'), speaker:"Ten" },
     ]);
   
const [currentQuestion, setcurrentquestion] = useState(0);
const [lvlcomp, setlvlcomp] = useState(false);

const nextQuestion = () => {
    console.log("cq",currentQuestion)
    if (currentQuestion < 10) {
      setcurrentquestion(currentQuestion+1);  
    }
    else{
      console.log("level complete")

      setlvlcomp(true)
//       setTimeout(() => { alert('Level Completed!'); }, 1500);
    
// setTimeout(() => { navigation.goBack() }, 4000);
    }

  }



  const speak = () => {
    Speech.speak(data[currentQuestion].speaker, { rate: 0.6 });
  };

  // Called after ref.current.clearSignature()
  const handleUndo = () => {
    console.log("clear success!");
    ref.current.undo();
  };


const handleBegin = () => {
    console.log('begin!');
   ref.current.changePenSize(8, 15);
  };

  // Called after end of stroke
  const handleEnd = () => {
    console.log('end', currentQuestion)
  };


const handleConfirm = () => {
    console.log("confirm");
    nextQuestion()
    ref.current.readSignature();

  };

const style = `.m-signature-pad {
              width: ${width/1}px; 
              height: ${height/1.2}px;
              margin:-2px;
              opacity:1;
              background-color:black;

              }  
              .m-signature-pad--body {
                margin-top:30px;
                margin-left:35px;
                border:none;
              width: ${width/1.25}px; 
              height: ${height/1.4}px;
              background-color:black;
              }
              .m-signature-pad--footer 
              display:none;
               .button {
                 display:none;   
    },
              body,html {
              width: ${width}px; 
              height: ${height}px;}`;


const Sign =()=>{
  console.log("component reload")
  return(
<View style={{flex:1}}>

<View style={{flex:0.25, marginTop:height/5}}>
              <TouchableOpacity onPress={()=>{speak()}} 
                style={{
                justifyContent:"center", alignItems:"center", 
                }}>
                
                <Ionicons name="volume-high-outline" size={78} color="white" />    
                </TouchableOpacity>
</View>            
    <Signature   
        style={{width:325, height:250, marginTop:-15,marginBottom:-25,  alignSelf:"center", opacity:0.2}} 
    penColor={"blue"}
    ref={ref}
    onBegin={handleBegin}
    onEnd={handleEnd}
    // minWidth={2}
    //  bgSrc={data[currentQuestion].imageSource}
    //  bgWidth={325}
    // bgHeight={405}
    webStyle={style}
    autoClear={true}
    trimWhitespace={true}
          />

</View> 
  )
}


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
          <Text style={{ fontWeight: "600", fontSize: 22 }}>LEVEL COMPLETED!!</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={{ marginTop: 40, borderRadius: 10, paddingVertical:15,paddingHorizontal: 30, backgroundColor: "#E44B73" }}
          >
            <Text style={{ fontWeight: "500", color: "white" }}>OK</Text>

          </TouchableOpacity>

        </View>
      </Modal>
    </View>

  );

}



    return (
      <View style={{ flex:1,  backgroundColor:"black"}}>
{currentQuestion < 11 && lvlcomp == false ?
<ImageBackground source={data[currentQuestion].imageSource} resizeImage="contain"style={{width:"101%",zIndex:1, height:"100%", alignSelf:'center', marginTop:-2}}>        

{Sign()}
<View style={{flexDirection:"row", justifyContent:"space-between",marginBottom:5, marginLeft:25,marginRight:25}}>

<TouchableOpacity onPress={()=>{handleUndo()}} 
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10.5,
                    paddingHorizontal: 22,
                    borderRadius: 4,
                    elevation: 3,
                    backgroundColor: '#F7DC6F',
                  }}>
                <Text style={{ 
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    color: 'grey',
  }}>Undo</Text> 
                </TouchableOpacity>


<TouchableOpacity onPress={()=>{handleConfirm()}} 
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical:10.5,
                  paddingHorizontal: 22,
                  borderRadius: 4,
                  elevation: 3,
                  backgroundColor: '#F7DC6F',
                }}>

                <Text style={{ 
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.15,
    color: 'grey',
  }}> Next</Text>  
                </TouchableOpacity>

   </View>
 </ImageBackground>  
 : lvlcomp==true && currentQuestion >= 10?
 <View style={{backgroundColor:"black"}}>
{LevelComplete()}
</View>  
:

<Text style={{backgroundColor:"yellow"}}>

</Text>
}
      </View> 

    );
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
    backgroundColor : "#9FE2BF",   
    height: 250 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 150,  
    marginLeft: 40,  
     
     },  
  
  modal2: {  
    justifyContent: 'center',  
    alignItems: 'center',   
    backgroundColor : "#F5B7B1",   
    height: 250 ,  
    width: '80%',  
    borderRadius:10,  
    borderWidth: 1,  
    borderColor: '#fff',    
    marginTop: 150,  
    marginLeft: 40,  
     
     },  
  
  
     text: {  
        color: '#3f2949',  
        marginTop: 10  
     }  ,
      button: {
       marginTop: 30, 
      borderRadius: 10,
      padding: 18,
      elevation: 2,
      
    },
    buttonOpen: {
      backgroundColor:"#0E6655"
    },
    
    wrongbox: {
      padding: 35,
      marginVertical:2,
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