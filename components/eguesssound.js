import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, FlatList, Text, Pressable, ImageBackground } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Speech from 'expo-speech';


export default function eguesssound() {

  const [data, setData] = useState([
    { value: '1', bgimg:require("./screenspics/abovebg.png"),imageSource: require('./screenspics/above.gif'), speaker:"the sun is above the mountain" },
    { value: '2', bgimg:require("./screenspics/underbg.png"), imageSource: require('./screenspics/under.gif'), speaker:"the boy is sitting under the tree" },
    { value: '3', bgimg:require("./screenspics/betweenbg.png"), imageSource: require('./screenspics/between.gif'), speaker:"the sun is between the mountains" },
    { value: '4', bgimg:require("./screenspics/infrontbg.png"), imageSource: require('./screenspics/infront.gif'), speaker:"the laptop is infront of the girl" },
    { value: '5', bgimg:require("./screenspics/behindbg.png"),imageSource: require("./screenspics/behind.gif"), speaker:"the cat is hiding behind the tree" },
    { value: '6', bgimg:require("./screenspics/insidebg.png"),imageSource: require("./screenspics/inside.gif"), speaker:"the fish are inside the aquarium" },
    { value: '7', bgimg:require("./screenspics/outside.png"),imageSource: require("./screenspics/out.gif"), speaker:"the lady is standing outside the door" },
    { value: '8', bgimg:require("./screenspics/nextto.png"),imageSource: require("./screenspics/beside.gif"), speaker:"the boy is standing beside the report" },    
    { value: '9', bgimg:require("./screenspics/itfruitbg.png"),imageSource: require("./screenspics/itfruits.gif"), speaker:"the pronoun it, is used with fruits" },
    { value: '10', bgimg:require("./screenspics/itobject.png"),imageSource: require("./screenspics/bookit.gif"), speaker:"the pronoun it, is used with objects" },
    { value: '11', bgimg:require("./screenspics/itanimalbg.png"),imageSource: require("./screenspics/itanimal.gif"), speaker:"the pronoun it, is used with animals" },
    { value: '12', bgimg:require("./screenspics/hebg.png"),imageSource: require("./screenspics/he.gif"), speaker:"the pronoun HE, is used for a boy" },
    { value: '13', bgimg:require("./screenspics/shebg.png"),imageSource: require("./screenspics/she.gif"), speaker:"the pronoun SHE, is used for a girl" },
   
]);

const [data2, setData2] = useState([
    { value: '4',
     imageSource:[require('./screenspics/above.gif'), require('./screenspics/insideQ1.gif'),
      require('./screenspics/behind.gif'), require('./screenspics/infront.gif')] , speaker:"Inside" ,
   options:[   
      {key:0,
      opt:"ABOVE"
      },
      {key:1,
      opt:"INSIDE"
      },
      {key:2,
      opt:"BEHIND"
      },
      {key:3,
      opt:"INFRONT"
      }
    ],
      correct_option:"INSIDE"},

      { value: '5',
      imageSource:[require('./screenspics/inside3.gif'), require('./screenspics/she2.gif'),
       require('./screenspics/he.gif'), require('./screenspics/itfruits.gif')] , speaker:"She " ,
    options:[
      {key:0,
        opt:"CAT"
        },
        {key:1,
        opt:"SHE"
        },
        {key:2,
        opt:"HE"
        },
        {key:3,
        opt:"FRUIT"
        }
      ],
        correct_option:"SHE"
      },


      { value: '6',
      imageSource:[require('./screenspics/out.gif'), require('./screenspics/insideQ1.gif'),
       require('./screenspics/inside3.gif'), require('./screenspics/inside.gif')] , speaker:"Outside" ,
    options:[
      {key:0,
        opt:"OUT"
        },
        {key:1,
        opt:"INSIDE"
        },
        {key:2,
        opt:"BEHIND"
        },
        {key:3,
        opt:"INFRONT"
        }
      ],
        correct_option:"OUT"
      },
     
      { value: '7',
      imageSource:[require('./screenspics/he.gif'), require('./screenspics/she.gif'),
       require('./screenspics/itanimal.gif'), require('./screenspics/they.gif')] , speaker:"It is used with" ,
    options:[
      {key:0,
        opt:"OUT"
        },
        {key:1,
        opt:"INSIDE"
        },
        {key:2,
        opt:"IT"
        },
        {key:3,
        opt:"INFRONT"
        }
      ],
        correct_option:"IT"
      },




     ]); 
 

  const [currenQuesiton, setcurrentquesiton] = useState(1);
  const [displayoptions, setdisplayoptions] =useState(false)
  const [answers, setanswers]= useState([])

  const nextQuestion = () => {
    console.log("cq",currenQuesiton)
    if (currenQuesiton < 13) {
      setcurrentquesiton(currenQuesiton+1);
      
    }
else(
    setdisplayoptions(true),
    setcurrentquesiton(1)
)
  }

  const previousQuestion = () => {
    if(currenQuesiton > 1)
      setcurrentquesiton(currenQuesiton - 1)
    
  }


  const speak = () => {
    Speech.speak(data[currenQuesiton-1].speaker, { rate: 0.6 });
  };


const speak2 = () => {
    Speech.speak(data2[currenQuesiton-1].speaker, { rate: 0.6 });
  };


const nextQuestion2 = () => {
    console.log("cq",currenQuesiton)
    if (currenQuesiton < 4) {
      setcurrentquesiton(currenQuesiton+1);
      
    }
else(
    setdisplayoptions(true),
    setcurrentquesiton(1)
)
  }


const validateResult = (selectedOption) => {

  console.log("..", data2[currenQuesiton-1]['correct_option'])

  console.log(selectedOption)
    setanswers(answers => answers.concat(selectedOption))
    if(selectedOption.opt==data2[currenQuesiton-1]['correct_option']){
    console.log("right answer")
    alert("CORRECT")
    nextQuestion()

    }

    else{
      alert("WRONG")
    }

}




const renderOptions = () => {
  console.log("current",currenQuesiton-1, data2[currenQuesiton-1]?.options);

        return (
          <View style={{flex:1, backgroundColor:"#B2ECB2", marginVertical:20, alignItems:"center"}}>
          
   <TouchableOpacity 
                onPress={()=>{speak2()}} 
                style={{
                justifyContent:"center", alignItems:"center", marginTop:16,
                }}>
                
                <Ionicons  name="volume-high-outline" size={115} color="orchid" />    
                </TouchableOpacity>
          <Text style={{alignText:"center",font: 15, fontWeight:"600", letterSpacing:0.3}}> Listen carefully and then choose the right box!</Text>

            <View key={currenQuesiton-1} style={{flex:1, flexDirection:"row",flexWrap:"wrap", justifyContent:'space-evenly',     marginHorizontal:10,  alignItems:'center'}}>
                {
                       data2[currenQuesiton-1]?.options.map(option => (
                       <TouchableOpacity 
                        onPress={()=> validateResult(option)}
                        style={{
                            borderWidth: 3, 
                            borderColor: "black",
                          height: 175, borderRadius: 10,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center',
                            width: 150, 
                            marginHorizontal:2.5,
                            marginVertical:6,
                            flexWrap:"wrap"
                        }} >
                       
        <Image source= {data2[currenQuesiton-1]?.imageSource[option.key]}
        
        style={{height:"100%",width:"100%", resizeMode:"cover", flexWrap:"wrap"}} />
                                      
                        </TouchableOpacity>
                
                    ))}
                
            </View>
            </View>
        )
        
    }


     
  return (
    <View style={{flex:1}}>
    {
      displayoptions ==false ?
    
    
       <ImageBackground source={data[currenQuesiton-1].bgimg} style={{ flex: 1}}>
    
    
        <View style={{ marginTop:60,flex: 0.90, alignContent:"center", alignItems:"center", justifyContent:"center", zIndex:1}}>
         <Image source={data[currenQuesiton-1].imageSource} style={{height:"100%",width:"100%", resizeMode:"contain",alignSelf:'center' }} /> 
        </View>
      
   <TouchableOpacity onPress={()=>{speak()}} 
                style={{
                justifyContent:"center", alignItems:"center", marginTop:20,
                }}>
                
                <Ionicons  name="volume-high-outline" size={110} color="orchid" />    
                </TouchableOpacity>

<View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:25, marginTop:60}}>
 <TouchableOpacity onPress={()=>{previousQuestion()}} 
                style={{
                justifyContent:"flex-end", alignItems:"flex-end"
                }}>
                
                <Ionicons  name="caret-back-outline" size={62} color="black" />    
                </TouchableOpacity>



   <TouchableOpacity onPress={()=>{nextQuestion()}} 
                style={{
                justifyContent:"flex-start", alignItems:"flex-start",  
                }}>
                
                <Ionicons  name="caret-forward-outline" size={62} color="black" />    
                </TouchableOpacity>
      
      </View>
</ImageBackground>
    

:

<View style={{flex:1, justifyContent:"center", alignItems:"center",  backgroundColor:"#B2ECB2"}}>
{renderOptions()}
 </View>

    }
</View>    
  )
}