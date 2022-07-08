import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from './screens/Cart';
import ProductsScreen from './screens/Product';
import ProductInfo from './screens/ProductInfo';
import Entypo from 'react-native-vector-icons/Entypo'
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ProductStack = createNativeStackNavigator(); 

const ProductStackNavigator = ({navigation}) => {
    return (

        <ProductStack.Navigator>
             <ProductStack.Screen
        name="Product"
        component={ProductsScreen}
        // options={{
        //   headerShown: true,
        // }}
        options={({route}) => ({
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

<ProductStack.Screen
        name="ProductInfo"
        component={ProductInfo}
        // options={{
         
        //   headerShown: true,
        // }}
        options={({route}) => ({
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate('Cart')}>
            <Icon
            type="ionicon"
            name={'md-cart'}
            size={25}
            color={'#A4A4A4'}
            style={{paddingRight:10}}
          />
             </Pressable>
           
          ),
          headerShown: true,
         
          
        })}
      />

<ProductStack.Screen
        name="Cart"
        component={Cart}
        options={{
         title:'Shopping Bag',
          headerShown: true,
        }}
      />

        </ProductStack.Navigator>
    )

}

export default ProductStackNavigator;