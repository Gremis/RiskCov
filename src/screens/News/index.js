import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import Post from '../../components/Post';

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  const getNewsFromApi = async () => {
    fetch('https://coronavirus-smartable.p.rapidapi.com/news/v1/US/', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'coronavirus-smartable.p.rapidapi.com',
        'x-rapidapi-key': '40a96f0ac5msh97902e129e50d3dp143131jsnf3072d9c6b18',
      },
    })
      .then(response => response.json())
      .then(json => setNews(json.news))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getNewsFromApi();
  }, []);

  return (
    <View>
      <FlatList data={news} renderItem={({item}) => <Post info={item} />} />
    </View>
  );
};

export default NewsScreen;
