import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductsScreen from './screens/Product';
import ProductInfo from './screens/ProductInfo';


const ProductStack = createNativeStackNavigator(); 

const ProductStackNavigator = ({navigation}) => {
    return (

        <ProductStack.Navigator>
             <ProductStack.Screen
        name="Product"
        component={ProductsScreen}
        options={{
          headerShown: true,
        }}
      />

<ProductStack.Screen
        name="Product Info"
        component={ProductInfo}
        options={{
         
          headerShown: true,
        }}
      />

        </ProductStack.Navigator>
    )

}

export default ProductStackNavigator;