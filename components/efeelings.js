import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, Image, FlatList, Text, Pressable, Dimensions, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import * as Speech from 'expo-speech';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import Carousel from 'react-native-snap-carousel';


export default function efeelings() {

  const [data, setData] = useState([
    {  bg: require('./screenspics/feelings1.png') },
    {  bg: require('./screenspics/feelings2.png') },
    {  bg: require('./screenspics/feelings3.png') },
    {  bg: require('./screenspics/feelings5.png') },
    {  bg: require('./screenspics/feelings6.png') },
    {  bg: require('./screenspics/efeelings12.png') }, //shocked
    {  bg: require('./screenspics/efeelings7.png') }, //tired
    {  bg: require('./screenspics/efeelings8.png') }, //excited
    {  bg: require('./screenspics/efeelings11.png') }, //shocked
    {  bg: require('./screenspics/efeelings9.png') }, //confused
    {  bg: require('./screenspics/efeelings10.png') }, //excited  
  ]);
 
const [data2, setData2] = useState([
    { value: '1',
     imageSource:[require('./screenspics/tiredd.png'), require('./screenspics/excitedd.png'),require('./screenspics/scaredd.png')] , 
     speak:"The boy has been playing out in the sun for a long time. He is feeling",
   options:[   
      {key:0,
      opt:"tired"
      },

      {key:1,
      opt:"excited"
      },

       {key:2,
      opt:"scared"
      }

    ],
      correct_option:"tired"},


{ value: '2',
     imageSource:[require('./screenspics/excitedd.png'), require('./screenspics/scaredd.png'),
     require('./screenspics/eangry.png')] , 
     speak:"The girl was eating and a spider came. She is feeling?",
   options:[   
      {key:0,
      opt:"excited"
      },

      {key:1,
      opt:"scared"
      },

       {key:2,
      opt:"angry"
      }

    ],
      correct_option:"scared"},


{ value: '3',
     imageSource:[require('./screenspics/excitedd.png'), require('./screenspics/confuse.png'),
     require('./screenspics/eangry.png')] , 
     speak:"The girl spilled her food. Her father is feeling?",
   options:[   
      {key:0,
      opt:"excited"
      },

      {key:1,
      opt:"confuse"
      },

       {key:2,
      opt:"angry"
      }

    ],
      correct_option:"angry"},


{ value: '5',
     imageSource:[require('./screenspics/scaredd.png'), require('./screenspics/sadd.png'),
     require('./screenspics/eangry.png')] , 
     speak:"The boy saw ghosts in his dream. He is feeling?",
   options:[   
      {key:0,
      opt:"scared"
      },

      {key:1,
      opt:"sad"
      },

       {key:2,
      opt:"angry"
      }

    ],
      correct_option:"scared"},


{ value: '6',
     imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
     require('./screenspics/excitedd.png')] , 
     speak:"The lesson is very hard. The boy is feeling?",
   options:[   
      {key:0,
      opt:"shock"
      },

      {key:1,
      opt:"confuse"
      },

       {key:2,
      opt:"excited"
      }

    ],
      correct_option:"confuse"},

      { value: '12',
      imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
      require('./screenspics/excitedd.png')] , 
      speak:"Adam never gets a bad grade. He got a bad grade on his test. What is Adam feeling?",
    options:[   
       {key:0,
       opt:"shock"
       },
 
       {key:1,
       opt:"confuse"
       },
 
        {key:2,
       opt:"excited"
       }
 
     ],
       correct_option:"shocked"},
 
       { value: '7',
       imageSource:[require('./screenspics/tiredd.png'), require('./screenspics/confuse.png'),
       require('./screenspics/shock.png')] , 
       speak:"The lady has been cleaning for too long. She is feeling?",
     options:[   
        {key:0,
        opt:"tired"
        },
  
        {key:1,
        opt:"confuse"
        },
  
         {key:2,
        opt:"shock"
        }
  
      ],
        correct_option:"tired"},
  
        { value: '8',
        imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
        require('./screenspics/excitedd.png')] , 
        speak:"The children are happy to be at ele's birthday. They are feeling?",
      options:[   
         {key:0,
         opt:"shock"
         },
   
         {key:1,
         opt:"confuse"
         },
   
          {key:2,
         opt:"excited"
         }
   
       ],
         correct_option:"excited"},
   
         { value: '11',
         imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
         require('./screenspics/excitedd.png')] , 
         speak:"Eve spilled the paint everywhere, her mother is feeling?",
       options:[   
          {key:0,
          opt:"shock"
          },
    
          {key:1,
          opt:"sad"
          },
    
           {key:2,
          opt:"excited"
          }
    
        ],
          correct_option:"shocked"},
    

          { value: '9',
     imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
     require('./screenspics/excitedd.png')] , 
     speak:"Two boys have lost their way. There are two roads, they dont know which one to pick? They are feeling?",
   options:[   
      {key:0,
      opt:"shock"
      },

      {key:1,
      opt:"confuse"
      },

       {key:2,
      opt:"scared"
      }

    ],
      correct_option:"confuse"},

      { value: '10',
      imageSource:[require('./screenspics/shock.png'), require('./screenspics/confuse.png'),
      require('./screenspics/excitedd.png')] , 
      speak:"Bob got his favourite toy as present. He is feeling?",
    options:[   
       {key:0,
       opt:"angry"
       },
 
       {key:1,
       opt:"confuse"
       },
 
        {key:2,
       opt:"excited"
       }
 
     ],
       correct_option:"excited"},
 
 





     ]); 
 

  const [currenQuesiton, setcurrentquesiton] = useState(1);
  const [displaysign, setdisplaysign] =useState(false)
  const [displayindex, setdisplayindex] =useState()
  const [answers, setanswers]= useState([])
  const [displayquiz, setdisplayquiz]= useState(false)


const EmotionsExercise=()=> {

  const nextQuestion = () => {
    console.log("cq",currenQuesiton)
    if (currenQuesiton < 10) {
      setcurrentquesiton(currenQuesiton+1);
      setdisplaysign(false)
    }
  }

  const previousQuestion = () => {
    if(currenQuesiton > 1)
      setcurrentquesiton(currenQuesiton - 1)
    
  }


const validateResult = (selectedOption) => {

  console.log("..", data2[currenQuesiton-1]['correct_option'])

  console.log(selectedOption)
    setanswers(answers => answers.concat(selectedOption))
    if(selectedOption.opt==data2[currenQuesiton-1]['correct_option']){
    console.log("right answer")
    alert("CORRECT")
    setdisplayindex(selectedOption.key)
    setdisplaysign(true)
    

    }

    else{
      alert("WRONG")
    }

}


const renderOptions = () => {
  console.log("current",currenQuesiton-1, data2[currenQuesiton-1]?.options);
  console.log(displayindex)
        return (
          
          <ImageBackground source={data[currenQuesiton-1].bg} style={{flex:1, resizeMode:"cover",
           height: height, width:width }}>
           
   <TouchableOpacity onPress={()=>{Speech.speak(data2[currenQuesiton-1]?.speak, { rate: 0.5 });}} 
                style={{
                justifyContent:"center", alignItems:"center", marginTop:height/1.6,marginBottom:5,
                }}>
                
                <Ionicons  name="volume-high-outline" size={88} color="#639DD1" />    
                </TouchableOpacity>       
                    
            <View key={currenQuesiton-1} style={{flex:1, flexDirection:"row",flexWrap:"wrap", justifyContent:'center', marginBottom:15,   marginHorizontal:5,  alignItems:'flex-end'}}>
                
                                
                {
                       data2[currenQuesiton-1]?.options.map(option => (
                       <TouchableOpacity 
                        onPress={()=> validateResult(option)}
                        style={{
                          flex:1,
                          height: 118, borderRadius: 50,
                            flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'center',
                            width: Dimensions.get('window').width/2, 
                            margin:3,
                            
                            
                        }} >
                       
        <Image source= {data2[currenQuesiton-1]?.imageSource[option.key]}
        
        style={{height:"100%",width:"100%", borderRadius:100, resizeMode:"cover", flexWrap:"wrap"}} />
                                      
                        </TouchableOpacity>

                    ))}
{ displaysign==true ? 
                 <View style={{marginTop:25}}>
   <TouchableOpacity onPress={()=>{nextQuestion()}} 
                style={{
                justifyContent:"flex-end", alignItems:"flex-end",
                }}>
                
                <Ionicons  name="caret-forward-outline" size={65} color="#80B900" />    
                </TouchableOpacity>
                </View>

: <Text>
</Text>

}
            </View>
            </ImageBackground>
          
        )
        
    }

  
  return (

<View style={{flex:1,  justifyContent:"center", alignItems:"center",  backgroundColor:"#B2ECB2"}}>
{renderOptions()}
 </View>
 
  )
}
const [activeIndex, setactiveIndex] = useState(0);
         const [data3, setData3] = useState([
    { value: 'happy', imageSource: require('./screenspics/happy.png'), speaker:"Music makes me feel happy." },
    { value: 'sad', imageSource: require('./screenspics/sad.png'), speaker:"I lost my toy, I'm feeling sad" },
    { value: 'angry', imageSource: require('./screenspics/angry.png'), speaker:"My father gets really angry if I don't get good marks at school" },
    { value: 'scared', imageSource: require('./screenspics/scared.png'), speaker:"I saw a ghost in my dream, I am feeling scared" },
    { value: 'excited', imageSource: require('./screenspics/excited.png'), speaker:"I'm so excited for my birthday" },
    { value: 'upset', imageSource: require('./screenspics/upset.png'), speaker:"on" },
    { value: 'nervous', imageSource: require('./screenspics/nervous.png'), speaker:"on" },
    { value: 'surprised', imageSource: require('./screenspics/surprised.png'), speaker:"on" },
     ]);

         

    const renderItems= ({item,index})=>{
        return (
          <View style={{
              backgroundColor:'floralwhite',
              flex:0.8
              }}>
            
            <Image style={{flex:1,
               resizeMode:"contain", width:"100%", height:"100%", padding:5}}
            source={item.imageSource}/>
            <Text style={{font:18, padding:12, textAlign:"center",fontWeight:"300"}}>{item.speaker}</Text>
           
           
   <TouchableOpacity onPress={()=>{Speech.speak(item.speaker, { rate: 0.7 });}} 
                style={{
                justifyContent:"center", alignItems:"center", marginTop:5,marginBottom:5,
                }}>
                
                <Ionicons  name="volume-high-outline" size={55} color="orchid" />    
                </TouchableOpacity>       
                   </View>

        )
    }

        return (
          <View style={{flex:1}}>
{ displayquiz == false ?
          <SafeAreaView style={{flex: 1, backgroundColor:'#F9E79F', paddingTop: 50 }}>
          <Text style={{fontSize:27, letterSpacing:1.2, fontWeight:"400", color:"#51575D", padding:25, marginLeft:15}}> Identifying Emotions</Text>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  data={data3}
                  sliderWidth={300}
                  itemWidth={300}
                  itemHeight={300}
                  sliderHeight={400}
                  renderItem={renderItems}
                  onSnapToItem = { index => setactiveIndex({activeIndex:index}) } />
          
          </View>

          <TouchableOpacity onPress={()=>{setdisplayquiz(true)}} 
          style={{ width:250,padding:20, borderRadius:30,marginVertical:20, alignSelf:"center", backgroundColor:"pink"}}>
<Text style={{color:"grey", fontSize:18, fontWeight:"300", textAlign:"center", letterSpacing:-0.5}}>Proceed to Exercise
</Text>
          </TouchableOpacity>

          </SafeAreaView>
          
          : displayquiz == true ?

          EmotionsExercise()
          :
<Text>
</Text>

          }
          </View>
        );
    }


