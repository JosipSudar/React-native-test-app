import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import * as React from 'react';
import FormScreen from '../../screens/FormScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CalculatorScreen from '../../screens/CalculatorScreen';

const Tab = createBottomTabNavigator();

function BottomStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Headline news"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="home" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="account-circle" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Form"
        component={FormScreen}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="form-select" size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="calculator" size={30} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomStack;
