import React from 'react';
import {View, Text,StyleSheet,Image,Pressable } from 'react-native';
import Banners from '../component/Banner';
import { Stack, Circle,Box, AspectRatio, Center, HStack,Heading , Divider,ScrollView, Square,Flex , VStack} from 'native-base';

const HomeScreen = ({navigation}) => {
    return(
        <>
        <View>

<View style={{ flexDirection: 'row', backgroundColor:'#fafdf3', justifyContent:'space-evenly' }}  >  
          <ScrollView horizontal={true}>  
          <Stack direction="row" mb="2.5" mt="1.5" ml='3' mr='3'   space={3}>
          
         
            <Pressable 
            onPress={() => navigation.navigate('ProductTab')}>
          <Circle  size="80px" bg="grey"
           shadow={"3"}>
             
              <Image
          source={require('../../../components/database/images/products/RK-modified.png')}
          style={{
            flex: 1,
            height:80,
            width:80,
            borderRadius:40,
            
            
           
            // resizeMode: 'cover',
          }}
          alt="description of image"
        />
          
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}}> Men</Text>
          </Center>
          </Pressable>

           <Pressable   onPress={() => navigation.navigate('ProductTab')}>
           <Circle size="80px" bg="grey"
        shadow={"3"}>
         
           <Image
          source={require('../../../components/database/images/products/gigi-modified.png')}
          style={{
            flex: 1,
            height:20,
            width:80,
            borderRadius:40,
            
            
           
            resizeMode: 'cover',
          }}
          alt="description of image"
        />
            
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}}> Women</Text>
          </Center>
          </Pressable>

          <Pressable  onPress={() => navigation.navigate('ProductTab')}>
          <Circle size="80px" bg="grey" shadow={"3"}>
         
          <Image
          source={require('../../../components/database/images/products/happy-kids-1-modified.png')}
          style={{
            flex: 1,
            height:20,
            width:80,
            borderRadius:40,
            
            
           
            resizeMode: 'cover',
          }}
          alt="description of image"
        />
          
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}} >Kids</Text>
          </Center>
          </Pressable>

          <Pressable  onPress={() => navigation.navigate('ProductTab')}>
          <Circle  size="80px" bg="grey"
           shadow={"3"}>
            
              <Image
          source={require('../../../components/database/images/products/Men-accessories-modified.png')}
          style={{
            flex: 1,
            height:80,
            width:80,
            borderRadius:40,
            
            
           
            // resizeMode: 'cover',
          }}
          alt="description of image"
        />
          
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}}>Accessories</Text>
          </Center>
          </Pressable>


          <Pressable  onPress={() => navigation.navigate('ProductTab')}>
          <Circle  size="80px" bg="grey"
           shadow={"3"}>
            
              <Image
          source={require('../../../components/database/images/products/footwear-modified.png')}
          style={{
            flex: 1,
            height:80,
            width:80,
            borderRadius:40,
            
            
           
            // resizeMode: 'cover',
          }}
          alt="description of image"
        />
          
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}}>Footwear</Text>
          </Center>
          </Pressable>

          <Pressable  onPress={() => navigation.navigate('ProductTab')}>
          <Circle  size="80px" bg="grey"
           shadow={"3"}>
            
              <Image
          source={require('../../../components/database/images/products/decor-modified.png')}
          style={{
            flex: 1,
            height:80,
            width:80,
            borderRadius:40,
            
            
           
            // resizeMode: 'cover',
          }}
          alt="description of image"
        />
          
          </Circle>
          <Center>
          <Text style={{fontSize:12, alignItems:'center', justifyContent:'center'}}>Decor</Text>
          </Center>
          </Pressable>


        </Stack>
        </ScrollView> 
          </View>
           
            <View style={{ flex: 1 }}>
                  <Image
                    style={styles.SectionImg2}
                    source={require('../../../components/database/images/products/myntrabanner.webp')}
                    alt="description of image"
                  />

        </View>

      
                   
                </View>
               
                </>


               

       
        
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
      height: 130,
      width: 400,
      alignItems: 'stretch',
    //   paddingHorizontal: 10,
       marginLeft: 2,
       marginRight:2,
    //   padding: 10,

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