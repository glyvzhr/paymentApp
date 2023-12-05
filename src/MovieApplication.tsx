import * as React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { TouchableOpacity } from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menus}>
          <Image
            style={styles.menu}
            source={require('./assets/icons/menus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logos}>
          <Image
            style={styles.logo}
            source={require('./assets/images/Logo.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchh}>
          <Image
            style={styles.search}
            source={require('./assets/icons/searchh.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.trending}/>
      <View><Text>Trending</Text></View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Movie" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function Application() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'rgb(19, 19, 19)',
  },
  header: {
    width: '98%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menus: {
    width: '20%',
    height: '60%',
    tintColor: 'white',
    fontSize: '10',
  },
  menu: {
    width: '60%',
    height: '100%',
    tintColor: 'white',
  },
  logos: {
    width: '40%',
    height: '60%',
    tintColor: 'white',
    fontSize: '10',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  searchh: {
    width: '18%',
    height: '60%',
    tintColor: 'white',
    fontSize: '10',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  search: {
    width: '56%',
    height: '90%',
    tintColor: 'white',
  },
  trending: {
    width: '100%',
    backgroundColor: 'red',
    height: '40%',
    marginTop: 30,
  },
});
