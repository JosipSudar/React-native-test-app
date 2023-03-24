import * as React from 'react';
import {NativeBaseProvider, Text, Box, View} from 'native-base';
import HeadLine from '../components/News/HeadLine';
import {ScrollView} from 'react-native-gesture-handler';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <HeadLine navigation={navigation} />
        </Box>
      </NativeBaseProvider>
    </ScrollView>
  );
};

export default HomeScreen;
