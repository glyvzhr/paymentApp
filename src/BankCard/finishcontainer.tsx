import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const FinishContainer = props => {
  return (
    <View>
        <Text style={styles.finish}>Not now</Text>
    </View>
  );
};

const styles=StyleSheet.create({
    finish: {
        fontSize:16,
        textAlign:'center',
        justifyContent:'center',
        marginTop:30,
        color:"grey",
      },
})
export default FinishContainer;