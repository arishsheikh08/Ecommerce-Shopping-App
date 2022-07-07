import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabs } from './navigation';


const Tab = createBottomTabNavigator();

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
  
    </>
  );
};

export default App;
