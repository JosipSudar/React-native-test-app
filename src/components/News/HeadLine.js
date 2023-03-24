import axios from 'axios';
import {
  VStack,
  View,
  Text,
  Image,
  Box,
  HStack,
  Pressable,
  FlatList,
} from 'native-base';
import React, {useEffect, useState} from 'react';

const HeadLine = ({navigation}) => {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=528ca554ddb74c4dba2f6f3408c375b8',
      )
      .then(res => setData(res.data.articles))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <VStack p={2} mx={1}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View rounded={'md'} p={1} my={1}>
            <Pressable
              onPress={() => navigation.navigate('NewsItem', {data: item})}>
              <Image
                alt={item.title}
                source={{
                  uri: item.urlToImage,
                }}
                style={{width: '100%', height: 200}}
              />
              <VStack p={2}>
                <Text bold>{item.title}</Text>
                <Box>
                  <Text m={2}>{item.author}</Text>
                  <Text textAlign={'right'} mr={3}>
                    {item.publishedAt}
                  </Text>
                </Box>
              </VStack>
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </VStack>
  );
};

export default HeadLine;
