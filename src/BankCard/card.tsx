/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity, } from "react-native"
function Card (){
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
              <Image source={require('./assets/icons/group.png')}/>
              <Text style={styles.text}>Credit / Debit Card</Text>
            </View>
            <View>
            <Image source={require('./assets/images/Card.png')}/>
            </View>
            <View style={styles.cam}>
            <Image source={require('./assets/icons/camera.png')}/>
            </View>
            <View style={styles.small}>
            <View>
              <Text style={styles.text1}>Name on card</Text>
            </View>
            <View style={styles.names}>
              <Text style={styles.name}>Zahra Gualiyeva</Text>
            </View>
            <View>y
              <Text style={styles.text2}>Card number</Text>
            </View>
            <View style={styles.numbers}>
              <Text style={styles.number}>4242 4242 4242 4242</Text>
            </View>
            </View>
            <View style={styles.medium}>
            <View style={styles.sol}>
            <View>
              <Text style={styles.text3}>Expiry date</Text>
            </View>
            <View style={styles.dates}>
              <Text style={styles.date}>04/22</Text>
            </View>
            </View>
            <View style={styles.sag}>
            <View>
              <Text style={styles.text4}>CVC</Text>
            </View>
            <View style={styles.cvcs}>
              <Text style={styles.cvc}>474 <Image source={require('./assets/icons/Hint.png')}/></Text>
            </View>
            </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.soz}>Use this card</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default Card

const styles=StyleSheet.create({
    area:{
      flex:1,
    },
    header:{
      flexDirection:"row",
      marginTop:50,
      marginLeft:35,
      alignItems:"center",
    },
    text:{
      color:"black",
      fontSize:22,
      fontWeight:"600",
      marginLeft:22,
      lineHeight:28,
    },
    cam:{
      alignSelf:"center",
    },
    text1:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:24,
    },
    names:{
      flex:0.6,
      borderWidth:1,
      marginLeft:24,
      width:"86%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    name:{
      fontSize:16,
      marginLeft:10,
    },
    text2:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:24,
      marginTop:8,
    },
    numbers:{
      flex:0.6,
      borderWidth:1,
      marginLeft:24,
      width:"86%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    number:{
      fontSize:16,
      marginLeft:10,
    },
    small:{
      height:120,
    },
    text3:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:24,
      marginTop:8,
    },
    dates:{
      flex:0.6,
      borderWidth:1,
      marginLeft:24,
      width:"80%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    date:{
      fontSize:18,
      marginLeft:10,
    },
    text4:{
      fontSize:14,
      fontWeight:"400",
      marginLeft:4,
      marginTop:8,
    },
    cvcs:{
      flex:0.6,
      borderWidth:1,
      marginLeft:5,
      width:"80%",
      marginTop:5,
      justifyContent:"center",
      borderRadius:10,
      borderColor:"grey",
    },
    cvc:{
      fontSize:18,
      marginLeft:10,
    },
    medium:{
      flexDirection:"row",
      justifyContent:"space-between",
      height:120,
    },
    sol:{
      width:"50%"
    },
    sag:{
      width:"50%",
    },
    button: {
      alignSelf:'center',
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: 'black',
      padding:20,
      width:284,
      borderRadius:10,
      marginBottom:30,
    },
    soz:{
      color:"white",
      fontSize:17,
      fontWeight:"600",
    },
})