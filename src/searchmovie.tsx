import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import MovieCard from './moviecard';

interface Movie {
  show: {
    id: number;
    name: string;
    summary: string;
    image: {
      medium: string;
      original: string;
    };
    rating: {
      average: number;
    };
  };
}

const API_URL = 'http://api.tvmaze.com/search/shows?q=';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = text => {
    setSearchValue(text);
  };

  const handleSearch = async () => {
    const responce = await fetch(API_URL + searchValue);
    const result = await responce.json();
    setMovies(result);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.main}>
       <TextInput style={styles.search} onChangeText={onChangeText} />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Image source={require('./assets/icons/search.png')} />
        </TouchableOpacity>
      </View>
      {movies.map((item, index) => {
        return (
          <MovieCard
            key={index}
            name={item?.show?.name}
            imageUrl={item?.show?.image?.medium} style={styles.pano}
          />
        );
      })}
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  main: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    width: '100%',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
  search: {
    backgroundColor: '#d3d3d3',
    width: '75%',
    marginVertical: 10,
    borderRadius: 12,
    marginTop: 40,
    marginLeft: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#d3d3d3',
    borderRadius: 18,
    height: 50,
    width: "15%",
    marginLeft: 10,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text1: {
    fontSize: 25,
    color: 'black',
    marginLeft: 5,
    marginTop: 10,
  },
  text2: {
    fontSize: 18,
    color: 'gray',
    marginLeft: 5,
    marginTop: 10,
    marginBottom: 20,
  },
});
