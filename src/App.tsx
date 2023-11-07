/* eslint-disable prettier/prettier */
import React from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function App(){
  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Image source={require('./assets/images/bust.png')}/>
      </View>
      <View>
        <Text style={styles.menyu}>{'Hey Leslee,\n there’s a new course about Figma'}</Text>
      </View>
      <View>
        <Text style={styles.menuu}>{'Find out how our new matching tool can help you learn another way'}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.soz}>Discover The Course</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.finish}>Not now</Text>
      </View>
    </SafeAreaView>
  );
};
export default App 

const styles=StyleSheet.create({
  area:{
    flex:1,
  },
  header:{
    alignItems:"center",
    marginTop: 24,
  },
  menyu:{
    fontSize:22,
    paddingHorizontal:40,
    fontWeight:'600',
    alignItems: 'center',
    color: "black",
    textAlign: 'center'
  },
  menuu:{
    fontSize:16,
    fontWeight:'300',
    paddingHorizontal:60,
    textAlign:'center',
    marginTop:11,
    color:"black",
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
  soz:{
    color:"white",
  },
  finish: {
    fontSize:16,
    textAlign:'center',
    justifyContent:'center',
    marginTop:30,
    color:"grey",
  },
})
