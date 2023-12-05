/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {SafeAreaView, TouchableOpacity, Text, StyleSheet} from "react-native"

function New(){
    const [data, setData] = useState("Zehra")


    const click = () =>{
        const name = data === "Zehra" ? "Venera": "Zehra"
        setData(name)
    }


    return(
    <SafeAreaView style={styles.main}>
        <Text style={styles.name}>{data}</Text>
            <TouchableOpacity style={styles.button} onPress={click}>
                <Text style={styles.btext}>Click</Text>
            </TouchableOpacity>
    </SafeAreaView>
    )
}
export default New

const styles=StyleSheet.create({
 main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
 },
 button: {
    alignSelf:'center',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 22,
    marginTop:67,
    width:284,
    borderRadius:10
  },
 name:{
    color:"white",
    marginVertical:12,
    padding:15,
    backgroundColor:"black",
    width:284,
    borderRadius:10,
 },
 btext:{
    color:"white",
 },
})