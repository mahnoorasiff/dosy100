import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, Dimensions, TextInput, Image, Text, LogBox, TouchableOpacity, ImageBackground } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


LogBox.ignoreAllLogs(true)
export default function eguessword({navigation}) {
//objects
    const [question, setQuestion] = useState([{ value:0, title: 'Clock', imgsource: require('./screenspics/clock.png'), options: ['C', 'l', 'c', 'o','k'], answer: ['C', 'l', 'o', 'c', 'k'] },
    {value:1, title: 'Chair', imgsource: require('./screenspics/chair.png'), options: ['r', 'i', 'a', 'C', 'h'], answer: ['C','h', 'a', 'i', 'r'] },
    { value:2, title: 'Keys', imgsource: require('./screenspics/keys.png'), options: ['y','k', 'e', 's'], answer:['k','e','y','s'] },
    { value:3, title: 'Shoes', imgsource: require('./screenspics/shoes.png'), options: ['S','h', 'e', 'o', 's'], answer:['S','h','o','e','s'] },
       //fruits
    { value:4, title: 'Mango', imgsource: require('./screenspics/mango.png'), options: ['m','n', 'g', 'a ', 'o'], answer:['m','a','n','g','o'] },
    { value:5, title: 'Grapes', imgsource: require('./screenspics/grapes.png'), options: ['g','a', 'p', 'r ', 'e', 's'], answer:['g','r','a','p','e','s'] },
    { value:6, title: 'Carrot', imgsource: require('./screenspics/carrot.png'), options: ['r','a', 'c', 'o ', ' r', 't'], answer:['c','a','r',' r','o','t'] },

    //animals
    { value:7, title: 'fox', imgsource: require('./screenspics/fox.png'), options: [ 'o', 'x', 'f'], answer:['f','o','x'] },
    { value:8, title: 'Zebra', imgsource: require('./screenspics/zebra.png'), options: ['r','a', 'z', 'e ', 'b'], answer:['z','e','b','r','a'] },
    { value:9, title: 'Lion', imgsource: require('./screenspics/lion.png'), options: ['o','i', 'l', 'n'], answer:['l','i','o','n'] },
    { value:10, title: 'Monkey', imgsource: require('./screenspics/monkey.png'), options: ['k','o', 'm', 'n ', 'e', 'y'], answer:['m','o','n','k','e','y'] }

    ])
    
    
    
    
    const [index, setIndex] = useState(0);
    const [opacity, setOpacity] = useState(0.15);
    const [colors, setColors] = useState([
        'yellow', '#9DE1FE', 'green', 'pink',
    ]);
    const [next, setNext] = useState(question[index].answer[0]);
    const [answer, setanswer] = useState([]);


const nextQuestion = () => {
    console.log("cq",index)
    if (index < 10) {
      setIndex(index+1)
      setanswer([]);
      setOpacity(0.1)
      
    }
    console.log("end")
          setTimeout(() => { alert('Level Completed!'); }, 1500);
    
setTimeout(() => { navigation.goBack() }, 3500);
  }

  const previousQuestion = () => {
    if(index > 1)
      setIndex(index - 1)
   
  }

    const check = (item, i) => {
      console.log("item",item)
      console.log("index",index)
  console.log("answernew",answer)
  console.log("nxt",next)

            if (item == next) {
                let a = answer;
                a.push(item);
                setanswer(a);
                setNext(question[index].answer[answer.length])
                if (answer.length == question[index].answer.length) {
                    
                    setOpacity(1)
                    alert('Correct');
      console.log(question[index].answer.length)
      console.log(answer.length)
      console.log("answer",answer)
      console.log("next--",next)
     
      setTimeout(() => {
             nextQuestion();
    }, 3500);
  

       console.log('after next')
       setNext(question[index+1].answer[0])
       
                }
        

        } else {
            alert('Please choose correct alphabet')
        }
    }

    const renderOptions = ({ item, i }) => {
        if (answer.includes(item,i)) {
            return (
                <View style={{ backgroundColor: 'pink', height: height / 10, width: width / 5, marginHorizontal: 10, justifyContent: 'center',  borderRadius: width / 10 }}>
                    <Text style={{ color: 'blue', alignSelf: 'center' }}>{item}</Text>
                </View>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => { check(item, i) }} style={{   width: (Dimensions.get('window').width / 4) - 12,
    height: (Dimensions.get('window').width / 4) - 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
 backgroundColor: '#FFE7A3' }}>
                    <Text style={{ alignSelf: 'center', fontSize:25, color: 'grey' }}>{item}</Text>
                </TouchableOpacity>
            )
        }
    }
    return (
        
            
                <ImageBackground
                    source={question[index].imgsource}
                    style={{flex:1}}
                >


                <Text style={ { opacity: opacity, marginTop:height/2.29, fontSize:27,
                     letterSpacing:-1.5, alignSelf:"center"}}>{question[index].title}</Text>
            
            <View style={{ flex: 1,   
    alignItems: 'center', justifyContent:"center", }}>
                <FlatList
                    data={answer}
                    keyExtractor={(item, index) => String(index)}
                    horizontal
                    extraData={answer.length}
                    renderItem={({ item, index }) => {
                        return ( 
                            <Text style={{ margin:2, padding:5, textAlign:"center",color: 'white',
    fontSize:35, fontWeight:"300", width:30,
    marginTop:-120,                         
    borderRadius: 10,
    alignSelf:"center"
    }}>{item}</Text>
                        )
                    }}

                />
            </View>
            <View style={{ flex: 0.4 }}>
                <FlatList
                    data={question[index].options}
                    keyExtractor={(item, index) => String(index)}
                    renderItem={renderOptions}
                    horizontal
                />
            </View>
            </ImageBackground>
        
    )
}
const styles = StyleSheet.create({
    
})