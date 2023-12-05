import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Animated, View, Image} from 'react-native';

const MyComponent = () => {
  const Animasion = new Animated.Value(0);
  const navigation = useNavigation();

  useEffect(() => {
    const animate = () => {
      Animated.timing(Animasion, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Username');
      });
    };

    const timer = setTimeout(() => {
      animate();
    }, 1000);

    return () => clearTimeout(timer);
  }, [Animasion]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Animated.View
        style={{
          opacity: Animasion,
          transform: [
            {
              translateY: Animasion.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        }}>
        <Image source={require('./assets/icons/netflix.png')} />
      </Animated.View>
    </View>
  );
};

export default MyComponent;
