import React from 'react';
import {View, Text,StyleSheet,Image } from 'react-native';
import Banners from '../component/Banner';

const HomeScreen = () => {
    return(
        <View>
            <Text>Home Screen</Text>
            <View style={{ flex: 1 }}>
                  <Image
                    style={styles.SectionImg2}
                    source={require('../../../components/database/images/products/Adidas.jpg')}
                    alt="description of image"
                  />
                </View>
            {/* <Banners /> */}
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image1: {
      height: 180,
      width: 380,
      marginLeft: 10,
      alignItems: 'baseline',
    },
  
    buttonStyle: {
      backgroundColor: 'black',
      color: '#FFFFFF',
      borderColor: 'red',
      height: 30,
      width: 100,
      alignItems: 'center',
      paddingHorizontal: 10,
      padding: 5,
      marginLeft: 20,
      flexDirection: 'row',
    },
    SectionImg2: {
      borderColor: 'red',
      height: 140,
      width: 360,
      alignItems: 'stretch',
      paddingHorizontal: 10,
      marginLeft: 20,
      padding: 10,
      paddingTop: 20,
      marginBottom: 20,
      marginTop: 10,
    },
    SectionImg3: {
      borderColor: 'red',
      height: 123,
      width: 360,
      alignItems: 'stretch',
      paddingHorizontal: 10,
      marginLeft: 20,
      padding: 10,
      marginBottom: 20,
      marginTop: 10,
    },
    SectionImg4: {
      borderColor: 'red',
      height: 140,
      width: 360,
      alignItems: 'stretch',
      paddingHorizontal: 10,
      marginLeft: 20,
      padding: 10,
      marginBottom: 20,
      marginTop: 10,
    },
    SectionImg5: {
      borderColor: 'red',
      height: 100,
      width: 360,
      alignItems: 'stretch',
      paddingHorizontal: 10,
      marginLeft: 20,
      padding: 10,
      marginTop: 20,
    },
  
    buttonTextStyle: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    inputText: {
      fontSize: 22,
      paddingHorizontal: 10,
      marginLeft: 10,
    },
    inputText2: {
      color: '#000000',
      fontSize: 22,
  
      paddingHorizontal: 10,
      marginBottom: 40,
      marginLeft: 10,
    },
    btnViewAll: {
      color: 'black',
      fontSize: 14,
      paddingTop: 5,
    },
  });