import React from "react";
import {View, Text,StyleSheet,Image,Pressable,SafeAreaView } from 'react-native';

import { Stack, Circle,Box, AspectRatio, Center, HStack,Heading , Divider,ScrollView, Square,Flex , VStack} from 'native-base';
import {COLOURS, Items} from '../../../components/database/Database'

const HomeScreen = ({navigation}) => {
    return(
        
         <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          borderBottomWidth: 0.1,
          borderBottomColor: '#dddddd',
        }}/>
       
        <ScrollView scrollEventThrottle={16}>
        <View>

<View style={{ flexDirection: 'row', backgroundColor:'#FFFFFF', justifyContent:'space-evenly' }}  >  
          <ScrollView horizontal={true}>  
          <Stack direction="row" mb="2.5" mt="1.5" ml='3' mr='3'   space={3}>
          
         
            <Pressable 
            onPress={() => navigation.navigate('Products')}>
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

           <Pressable   onPress={() => navigation.navigate('Products')}>
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

          <Pressable  onPress={() => navigation.navigate('Products')}>
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

          <Pressable  onPress={() => navigation.navigate('Products')}>
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


          <Pressable  onPress={() => navigation.navigate('Products')}>
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

          <Pressable  onPress={() => navigation.navigate('Products')}>
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
           
            <View style={{ flex: 1, backgroundColor:'#FFFFFF' }}>
                  <Image
                    style={styles.SectionImg2}
                    source={require('../../../components/database/images/products/myntrabanner.webp')}
                    alt="description of image"
                  />

        </View>

      
                   
                </View>

              



                <View style={{backgroundColor:'#FFFFFF'}} >
      {/* <Center>
       <Heading size="lg" ml="1" mt="2" >
       WE BELIEVE IN TRUST
            </Heading>
            <Heading size="lg" ml="1" mt="2" color="red.500" >
            SINCE 1942
            </Heading>
            </Center> */}

          
           
          
  
    <Box>
      <Text  style={{padding:5,
                fontSize: 20,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20}}>
                Our Partners
                </Text>
      <Image 
      source={require('../../../components/database/images/products/hrx.webp')}
      style={{
        // flex: 1,
        height:180,
         width:400,
      }}
      alt="description of image"
     />

<Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

<Image 
      source={require('../../../components/database/images/products/hop.jpg')}
      style={{
        // flex: 1,
        height:180,
         width:400,
      }}
      alt="description of image"
     />

<Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />

<Image 
      source={require('../../../components/database/images/products/faustobanner.jpg')}
      style={{
        // flex: 1,
        height:140,
         width:400,
      }}
      alt="description of image"
     />

<Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} />
<Image 
      source={require('../../../components/database/images/products/boat.jpg')}
      style={{
        // flex: 1,
        height:200,
         width:400,
      }}
      alt="description of image"
     />

{/* <Divider my="2" _light={{
        bg: "muted.800"
      }} _dark={{
        bg: "muted.50"
      }} /> */}

     
 
    </Box>

   
   
    <Box paddingTop={10} backgroundColor={'white'} h={150}> 
      <Center>
       <Heading size="lg" ml="1" mt="2" >
       WE BELIEVE IN TRUST
            </Heading>
            <Heading size="lg" ml="1" mt="2" color="red.500" >
            SINCE 1942
            </Heading>
            </Center>
            </Box>
{/* 
***************************************************Footer section************************************************************* */}

            
            <View style={{ flexDirection: 'row', justifyContent:"center", backgroundColor:'white', height:150 }}  >  

   
<Flex direction="row" h="100" w="100"  justifyContent="center" pl="1" pr="1" pt="5" >



  <Stack  >
  <Image 
  source={require('../../../components/database/images/products/genuine.jpg')}
  style={{height:80 ,width:100}}
  />
  {/* <Icon name="wood"
              size={50}
              // color="blue"
              // type="Fontisto"
              alignItems='flex-start'
             
            /> */}
  <Text style={{paddingTop:14,
                fontSize: 11,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20}}>
  Genuine Product
    </Text>
    </Stack>

   
  <Divider bg="amber.500" thickness="2" mx="4" orientation="vertical" h="24"  ml={9} mr={9}/>

  <Stack >
  <Image 
  source={require('../../../components/database/images/products/quality.jpg')}
  style={{height:80 ,width:100}}
  />
  {/* <Icon name="wood"
              size={50}
              // color="blue"
              // type="Fontisto"
              alignItems='flex-start'
             
            /> */}
  <Text style={{paddingTop:14,
                fontSize: 11,
                color: COLOURS.black,
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20}}>
  Quality Checked
    </Text>
    </Stack>

 
   

 
   
 

</Flex>



</View>

<View>
  <Text style={{
    fontSize:6,
    textAlign:'center'
  }}>
© 2022  Arish Sheikh | All Rights Reserved 
</Text>
</View>
            


   


    
      
     
     
      </View>

    


              
    



</ScrollView>

</SafeAreaView>
                


               

       
        
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