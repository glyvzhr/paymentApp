import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Netflix from './Netflix';
import HomeScreen from './HomeScreen';
import UserNameScreen from './UserNameScreen';
import PasswordScreen from './PasswordScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Girish" component={Netflix} />
        <Stack.Screen name="Username" component={UserNameScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
