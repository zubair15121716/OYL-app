import React, { useState } from "react";
import {Text, View,Image,TouchableOpacity,Modal} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import {CustomButton,CustomPaymentDialogBox,Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function Payment(){
    const {navigate} = useNavigation();
    const [modal,setModal] = useState(false);
    return(
        <>  
            <Wrapper>
                <View style={{flex:1,alignItems: 'center',justifyContent:"center"}}>
                <View style={styles.payContainer}>
                    <View style={{backgroundColor: '#FFFFFF',width:width(80),height:height(30),alignItems:'center',justifyContent:'center',}}>
                        <Text style={{color: '#000000',fontSize:12}}>YOUR OYL AND FYLTER CHANGE WILL BE</Text>
                        <Text style={{color: '#000000',fontSize:72,fontWeight:'bold'}}>$87</Text>
                        <Text style={{color: '#000000',fontSize:10,padding:24,textAlign:'center'}}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES - SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID AND AIR UP YOUR TIRES</Text>
                    </View>
                </View>
                    <Text style={{color: '#FFFFC8',fontSize:14,padding:24,textAlign:'center'}}>Payment Methods</Text>
                    <View style={{flexWrap:"wrap",flexDirection:'row',gap:20,marginLeft:20}}>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.Bitpay} resizeMode="contain" style={{aspectRatio:0.7}} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.Gpay} resizeMode="contain" style={{aspectRatio:0.67}} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.ApplePay} resizeMode="contain" style={{aspectRatio:0.34}} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.Affirm} resizeMode="contain" style={{aspectRatio:0.8}} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.Klarna} resizeMode="contain" style={{aspectRatio:0.5}} ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setModal(!modal)}} style={{width:width(25),height:height(12),backgroundColor:'#FFFFFF',borderRadius:14,alignItems:'center',justifyContent:'center',}}>
                            <Image source={images.Stripe} resizeMode="contain" style={{aspectRatio:0.8}} ></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                {modal 
                && 
                <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                setModal(!modal);
                }}>        
                    <CustomPaymentDialogBox></CustomPaymentDialogBox>
                
                </Modal>
                }
            </Wrapper>
        </>
    )
};



export default Payment;