

import React from "react"
import {View,Text, TextInput, Button, StyleSheet, Touchable, TouchableOpacity} from "react-native"
export default function Login(){

    return(

        <View style={styles.container}>
        <View style={styles.wrapper}>
           
            <TextInput style={styles.input} placeholder =" Enter Email"></TextInput>
            <TextInput  style={styles.input}placeholder ="password" secureTextEntry></TextInput>
            <Button onPress={this.login} title="Login"/>
            <View style={{flexDirection: 'row',marginTop:20}}>
                <Text >Dont have Account?</Text>
                <TouchableOpacity >

                    <Text style={styles.link}>Register</Text>
                </TouchableOpacity>
                
            </View>
        </View>
        </View>
    );

    
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    wrapper:{
        width:'80%'
    },
    input:{
        borderColor:'#bbb',
        marginBottom:12,
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:14
    },
    link:{
        color:'blue'
    }

});