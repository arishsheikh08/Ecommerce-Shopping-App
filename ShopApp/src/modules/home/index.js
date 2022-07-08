
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './screens/Home';

const HomeStack = createNativeStackNavigator(); 

const HomeStackNavigator = ({navigation}) => {
    return (

        <HomeStack.Navigator>
             <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
        }}
      />



        </HomeStack.Navigator>
    )

}

export default HomeStackNavigator;