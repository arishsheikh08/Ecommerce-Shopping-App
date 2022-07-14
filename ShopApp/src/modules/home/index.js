
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Cart from '../products/screens/Cart';

import HomeScreen from './screens/Home';

const HomeStack = createNativeStackNavigator(); 

const HomeStackNavigator = ({navigation}) => {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({route}) => ({
          title:' ShopApp',
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Cart')}>
            <Icon
            type="ionicon"
            name={'cart'}
            size={25}
            color={'#A4A4A4'}
            style={{paddingRight:10}}
          />
             </Pressable>
           
          ),
          headerShown: true,
         
          
        })}
      />
      <HomeStack.Screen
      name="Cart"
      component={Cart}
      options={{
       title:'Shopping Bag',
        headerShown: true,
      }}
    />




        </HomeStack.Navigator>
    )

}

export default HomeStackNavigator;