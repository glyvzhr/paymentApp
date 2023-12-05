import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';

function UserNameScreen() {
  const navigation = useNavigation();
  const gotoDetails = () => {
    navigation.navigate('Password')
  }
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.navsol}>
          <Image
            style={styles.logo1}
            source={require('./assets/icons/netflix.png')}
          />
        </View>
        <View style={styles.navsag}>
          <Image
            style={styles.pen}
            source={require('./assets/icons/pen.png')}
          />
        </View>
      </View>
      <View style={styles.medium}>
        <View style={styles.icons}>
          <View style={styles.sol1}>
            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Image
                style={styles.cards}
                source={require('./assets/icons/blueface.png')}
              />
              <Text style={styles.name}>Zahra</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Image
                style={styles.cards}
                source={require('./assets/icons/yellowface.png')}
              />
              <Text style={styles.name}>Venera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Image
                style={styles.pluss}
                source={require('./assets/icons/plus.png')}
              />
              <Text style={styles.name}>Add profile</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sag1}>
            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Image
                style={styles.cards}
                source={require('./assets/icons/redface.png')}
              />
              <Text style={styles.name}>Arif</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Password')}>
              <Image
                style={styles.cards}
                source={require('./assets/icons/kids.png')}
              />
              <Text style={styles.name}>Kids</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default UserNameScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navsol: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  logo1:{
    marginTop:15,
  },
  navsag: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pen: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  medium: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    width: '70%',
    height: '80%',
    flexDirection: 'row',
    marginTop: 80,
  },
  cards: {
    marginTop: 12,
  },
  sol1: {
    with: '10%',
    height: '90%',
    marginLeft: 20,
  },
  pluss: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  sag1: {
    with: '10%',
    height: '60%',
    marginLeft: 30,
  },
  name: {
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    marginTop: 5,
  },
});
