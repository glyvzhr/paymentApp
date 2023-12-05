import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const InputScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  const handleNavigation = () => {
    if (value === '0804') {
      navigation.navigate('Home');
    } else {
      alert('PASSWORD WRONG');
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.inputmain}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Enter The Password"
          keyboardType="numeric"
        />
      </View>
      {/* <Button title="Git" onPress={handleNavigation} /> */}
      <TouchableOpacity onPress={handleNavigation}>
        <Image style={styles.yes} source={require('./assets/icons/yes.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default InputScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf:"center",
    // marginBottom:80,
  },
  input: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
    borderRadius:5,
  },
  alert: {
    backgroundColor: 'red',
  },
  button: {
    flex: 1,
  },
  yes: {
    width: 40,
    height: 40,
  },
});
