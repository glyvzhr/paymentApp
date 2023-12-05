import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const ButtonContainer = props => {
  return (
    <View>
        <TouchableOpacity style={styles.button}>
        <Text style={styles.soz}>Discover The Course</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles=StyleSheet.create({
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
})
export default ButtonContainer;