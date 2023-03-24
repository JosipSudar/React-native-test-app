import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {NativeBaseProvider, Text, Box} from 'native-base';
import MyStack from './navigation/StackNavigation/MyStack';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
