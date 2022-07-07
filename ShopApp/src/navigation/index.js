import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/screens/Home';
import ProductsScreen from '../modules/products/screens/Product';
import ProductStackNavigator from '../modules/products';



const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Product" component={ProductStackNavigator}   options={{
         
          headerShown: false,
        }} />
    </Tab.Navigator>
  );
}