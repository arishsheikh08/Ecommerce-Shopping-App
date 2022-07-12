import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabs } from './navigation';
import { NativeBaseProvider } from 'native-base';


const Tab = createBottomTabNavigator();

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NativeBaseProvider>
    <NavigationContainer>
    <MyTabs />
    </NavigationContainer>
    </NativeBaseProvider>
  
    </>
  );
};

export default App;
