import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../modules/home/screens/Home';
import ProductsScreen from '../modules/products/screens/Product';
import ProductStackNavigator from '../modules/products';
import HomeStackNavigator from '../modules/home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo'
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Products') {
            iconName = focused ? 'shop' : 'shop';
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#664229',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} options={{

        headerShown: false,
      }} />
      <Tab.Screen name="Products" component={ProductStackNavigator}
        options={{

          headerShown: false,
        }}

      />
    </Tab.Navigator>
  );
}