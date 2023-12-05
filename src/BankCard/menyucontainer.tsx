import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MenyuContainer = props => {
  return (
    <View>
      <Text style={styles.menyu}>
        {'Hey Leslee,\n there’s a new course about Figma'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menyu: {
    fontSize: 22,
    paddingHorizontal: 40,
    fontWeight: '600',
    alignItems: 'center',
    color: 'black',
    textAlign: 'center',
  },
});
export default MenyuContainer;
