import {Button, Image, VStack} from 'native-base';
import * as React from 'react';
import {NativeBaseProvider, Text, Box, View} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsDetail = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <VStack>
      <Button onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={30} />
      </Button>
      <Image
        alt={data.title}
        source={{
          uri: data.urlToImage,
        }}
        style={{width: '100%', height: 200}}
      />
      <Text>{data.title}</Text>
      <Text>{data.author}</Text>
      <Text>{data.content}</Text>
    </VStack>
  );
};

export default NewsDetail;
