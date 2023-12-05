import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const HeaderContainer = props => {
  return (
    <View style={styles.header}>
        <Image source={require('./assets/images/bust.png')}/>
        <View style={{alignItems:"center", marginTop: 24,}}></View>
    </View>
  );
};

const styles=StyleSheet.create({
  header:{
    alignItems:"center",
    marginTop: 24,
  },
})
export default HeaderContainer;