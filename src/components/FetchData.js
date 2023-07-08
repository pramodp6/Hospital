import React, { useEffect,useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { View ,Text} from 'react-native';
import {BASE_URL} from '../Config'

   export default function FetchData() {

  const [data,setData]=useState([]);
   const getData = async()=> {


 
     let result = await fetch(BASE_URL)
     result = await result.json()


    setData(result)
   }
    useEffect(()=>getData(),[]);
   
  return (
    <ScrollView>
     <View>  
    {data.length ?
    data.map((item)=> 
    <View>
      <Text style = {pramod.d}>Id:{item.id}</Text>
      <Text style = {{fontSize:23,color:"blue",margin:16}}>Title:{item.title}</Text>
      <Text style = {{fontSize:18,color:"green",margin:16}}> Body:{item.body}</Text>
   </View>

    ):null
    }
    
  
  </View>  
  </ScrollView>
  );
}

const pramod = StyleSheet.create({
  d:{

    fontSize:25,
    color:"red",
    margin:16,
    verticalAlign: 'top',
    textAlign: 'center'

  },
});



