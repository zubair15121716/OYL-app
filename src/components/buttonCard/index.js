import React, { useState } from "react";
import styles from "../../services/utilities/appStyles";
import {TouchableWithoutFeedback,Text,View,TextInput,Image} from "react-native";
import {images} from '../../../services/utilities'
import { useNavigation } from "@react-navigation/native";

export default CustomInputCard =({textStyle=styles.textInput,viewStyle=styles.textArea,edit=false,image=true,...props})=>{
    const {navigate}= useNavigation();
    
    return( 
        <>
            <View style={[viewStyle,{backgroundColor:'#F7F7F7',padding: 10,elevation: 5,shadowColor: 'black',shadowOffset: { width: 0, height: 0 },shadowOpacity: 0.1,shadowRadius: 5,marginVertical:12}]}>
            <Text style={textStyle}>{props.title}</Text>
            <View style={{flexDirection:'row'}}>
                <TextInput editable={edit} selectTextOnFocus={edit} style={{color:'#000000',fontSize:12,flex:8}} placeholder={props.placeholder} placeholderTextColor="#444444D4"></TextInput>
                {image && 
                <TouchableWithoutFeedback onPress={()=>props.setmodal(!props.modal)}>     
                    <Image source={image} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                </TouchableWithoutFeedback>
                }
            </View>
            </View>
            
        </>
    )
}