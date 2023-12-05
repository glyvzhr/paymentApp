import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  // const gotoDetails = () => {
  //   navigation.navigate(')
  // }
  return (
    <View style={styles.main}>
      {/* <LinearGradient colors={['#000', '#000']}> */}
      <Image
        style={styles.movie}
        source={require('./assets/images/movie.png')}
      />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image
            style={styles.ntxlf}
            source={require('./assets/icons/ntflx.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.t1}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.t1}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.t1}>My List</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.header2}>
        <Text style={styles.t2}>#2 in Nigeria Today</Text>
      </View>
      {/* </LinearGradient> */}

      <View style={styles.icons}>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image
            style={styles.img1}
            source={require('./assets/icons/mylist.png')}
          />
          <View style={styles.mylistt}>
            <Text style={styles.mylist}>My List</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.img2}
          onPress={() => navigation.navigate('Profile')}>
          <Image
            style={styles.img3}
            source={require('./assets/icons/play.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate()}>
          <Image
            style={styles.img}
            source={require('./assets/icons/info.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <Text style={styles.pre}>Previews</Text>
        <View style={styles.picture}>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              style={styles.imgg5}
              source={require('./assets/images/ms1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              style={styles.imgg5}
              source={require('./assets/images/ms2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              style={styles.imgg5}
              source={require('./assets/images/ms3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Image
              style={styles.imgg5}
              source={require('./assets/images/ms4.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.zahra}>Continue Watching Zahra</Text>
      </View>
      <View style={styles.finish}>
        <TouchableOpacity>
          <Image
            style={styles.imgg5}
            source={require('./assets/icons/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imgg5}
            source={require('./assets/icons/srch.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imgg5}
            source={require('./assets/icons/cmng.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imgg5}
            source={require('./assets/icons/dwnld.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.imgg5}
            source={require('./assets/icons/more.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  movie: {
    width: '100%',
    position: 'absolute',
    height: 400,
  },
  text: {
    fontSize: 30,
    width: '50%',
    height: 100,
  },
  header: {
    width: '90%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  t1: {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
  header2: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  t2: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    marginTop: 310,
  },
  icons: {
    width: '70%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
  },
  img1: {
    marginLeft: 10,
  },
  img2: {
    backgroundColor: 'rgb(195, 191, 191)',
    borderRadius: 5,
    padding: 8,
    width: 108,
    alignItems: 'center',
  },
  img3: {
    tintColor: 'black',
  },
  img: {
    tintColor: 'white',
  },
  mylistt: {
    alignItems: 'center',
    color: 'white',
  },
  mylist: {
    fontSize: 15,
    color: 'white',
  },
  navbar: {
    width: '100%',
    height: 220,
    marginTop: 20,
  },
  picture: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-around',
  },
  pre: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 10,
    color: 'white',
  },
  imgg5: {
    marginLeft: 13,
    marginTop: 5,
  },
  zahra: {
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 15,
    color: 'white',
  },
  finish: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    backgroundColor: 'rgb(24, 24, 24)',
  },
});
