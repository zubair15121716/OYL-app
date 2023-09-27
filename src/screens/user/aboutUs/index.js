import React from "react";
import { Text, View, Image, TouchableOpacity} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import { CustomButton, Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function Aboutus(){
    const {navigate} = useNavigation();
    return (
        <>
        <View style={{backgroundColor:'#FFFFC8',flex:1,alignItems:'center',justifyContent:'center'}}>
          <Image source={images.Thumb} style={{aspectRatio:0.4}} resizeMode="center"></Image>
        </View>
        <Wrapper>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={[styles.addedMsg,{textAlign:'justify'}]}>Thank You!</Text>
            <Text style={{color:'white',fontSize:18,margin:10,}}>Thanks for using our app, We hope you like it and use it again.</Text>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity>
              <Image source={images.Insta} style={{widht:width(8),height:height(8)}} resizeMode="center"></Image>
              </TouchableOpacity>
              <TouchableOpacity>
              <Image source={images.Fb} style={{widht:width(10),height:height(10)}} resizeMode="center"></Image>
              </TouchableOpacity>
            </View>
            <CustomButton press={()=>navigate('Login')} title='GO HOME' touchStyle={[styles.button,{marginTop:height(3)}]}></CustomButton>
          </View>
        </Wrapper>
        </>
    );
};



export default Aboutus;





{/* <>
      <View style={{backgroundColor:'#FFFFC8',flex:1,alignItems:'center',justifyContent:'center'}}>
        <Image source={images.Thumb} style={{aspectRatio:0.4}} resizeMode="center"></Image>
      </View>
      <Wrapper>
        <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={[styles.addedMsg,{textAlign:'justify'}]}>Thank You!</Text>
          <Text style={{color:'white',fontSize:18,margin:10,}}>Thanks for using our app, We hope you like it and use it again.</Text>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity>
            <Image source={images.Insta} style={{widht:width(8),height:height(8)}} resizeMode="center"></Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image source={images.Fb} style={{widht:width(10),height:height(10)}} resizeMode="center"></Image>
            </TouchableOpacity>
          </View>
          <CustomButton press={()=>navigate('Login')} title='GO HOME' touchStyle={[styles.button,{marginTop:height(3)}]}></CustomButton>
        </View>
      </Wrapper>
      </> */}