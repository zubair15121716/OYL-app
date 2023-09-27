import React from "react";
import { Text, View,Image, TextInput} from "react-native";
import {images} from '../../services/utilities'
import { width, height} from 'react-native-dimension';
import { CustomButton} from "../../components";
import styles from "../../services/utilities/appStyles";
import { useNavigation } from "@react-navigation/native";

export default CustomPaymentDialogBox =({children,...props})=>{
    const {navigate} = useNavigation();
    return( 
        <>
            <View style={{flex:1,alignItems:'center',justifyContent:"center"}}>
                <View style={{alignItems:"center",justifyContent:"center" ,width:width(90),height:height(55),backgroundColor:'white',borderRadius:20}}>
                <Image source={images.PaymentCircle}  style={{width:width(26) ,height:height(13),marginBottom:height(3)}}></Image>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:height(2.4),}}>
                        <Text style={{color:'black',fontWeight:700,}}>Add New Details</Text>
                        <Text style={{color:'black',fontWeight:700,}}>Please enter your Payment Details</Text>
                        <TextInput placeholder="Card holder name" placeholderTextColor="#222222" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(70),height:height(5),borderRadius:10,fontSize:13,marginTop:height(3.1)}}></TextInput>
                        <TextInput placeholder="Number of card" placeholderTextColor="#222222" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(70),height:height(5),borderRadius:10,fontSize:13,marginTop:height(3.1)}}></TextInput>
                        <View style={{alignSelf:'flex-start',marginTop:height(2.51)}}>
                            <Text style={{color:'black',fontWeight:300,fontSize:10}}>VALID THRU</Text>
                        </View>
                        <View style={{flexDirection:'row',gap:6}}>
                            <TextInput placeholder="MM" placeholderTextColor="#3A3A3A" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(20),height:height(5),borderRadius:10,fontSize:10,marginTop:height(3.1)}}></TextInput>
                            <Text style={{color:'black',fontWeight:700,marginTop:height(4.1)}}>/</Text>
                            <TextInput placeholder="YY" placeholderTextColor="#3A3A3A" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(20),height:height(5),borderRadius:10,fontSize:10,marginTop:height(3.1)}}></TextInput>
                            <TextInput placeholder="CVV" placeholderTextColor="#3A3A3A" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(20),height:height(5),borderRadius:10,fontSize:10,marginTop:height(3.1),marginLeft:height(3.1)}}></TextInput>
                        </View>
                        <CustomButton press={()=>navigate('confirmMsg-S')} title="Save" touchStyle={[styles.button,{marginBottom:height(14),marginTop:height(3.5),width:width(43),backgroundColor:"#293D3D"}]} textStyle={[styles.customButtonText,{color:'white'}]}></CustomButton>
                    </View>
                </View>
            </View> 
        </>      
    )
}















