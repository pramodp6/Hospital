 
 import React from "react"
 import { Text ,View,Image, StyleSheet} from "react-native"

 export default Card=()=>{

    return(

    <View style={styles.container}>

    <View style={styles.images}>


        <Text> Pramod</Text>
        <Image style={styles.images}source={require('../assets/p.png')}></Image>
    </View>
    </View>
    )

 }

 const styles = StyleSheet.create({
     container:{
        marginTop:0,
        marginLeft:16,
    marginRight:100,
        backgroundColor:'white',
        padding:0,
        justifyContent: 'center',
        flex:1
     },
     images:{
        marginHorizontal:40,
        width:200,
        height:100,
      
        
     }

 })