import React from "react";
import { Text, View,Image, TextInput} from "react-native";
import {images} from '../../services/utilities'
import { width, height} from 'react-native-dimension';
import { CustomButton,CustomInput,Wrapper} from "../../components";
import styles from "../../services/utilities/appStyles";

export default CustomDialogBox =({children,...props})=>{
    return( 
        <>
            <View style={{alignItems:"center",justifyContent:"center" ,width:width(90),height:height(30),backgroundColor:'white',borderRadius:20}}>
            <Image source={images.locationPicker}  style={{width:width(26) ,height:height(13),marginBottom:height(3)}}></Image>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:height(2.4),}}>
                    <Text style={{color:'black',fontWeight:700,}}>Add Location</Text>
                    <TextInput placeholder="Search here" placeholderTextColor="#3A3A3A" style={{color:'black',paddingHorizontal:10,backgroundColor:"#F5F5F5",width:width(70),height:height(6),borderRadius:10,fontSize:15,marginTop:height(3.1)}}></TextInput>
                    <CustomButton title="Submit" touchStyle={[styles.button,{marginBottom:height(14),marginTop:height(3.5),width:width(43),backgroundColor:"#293D3D"}]} textStyle={[styles.customButtonText,{color:'white'}]}></CustomButton>
                </View>
            </View>
        </>      
    )
}









