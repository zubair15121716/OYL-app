import React from "react";
import {ScrollView, Text, View,ImageBackground, Image, TextInput,KeyboardAvoidingView, Platform} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import { CustomBox, CustomButton,CustomInput,Wrapper } from "../../../components";
import styles from '../../../services/utilities/appStyles';
import { useNavigation } from '@react-navigation/native';

function CreateAcc(){
    const {navigate} = useNavigation();
    return(
        <Wrapper>
            <CustomInput placeholder='Enter your Email' viewStyle={[{marginTop:height(9),marginBottom:height(5)},styles.textArea]} title="Email"></CustomInput>
            <CustomInput placeholder='Enter your Password' viewStyle={[{marginBottom:height(3)},styles.textArea]} title="Phone"></CustomInput>
            <View style={{marginHorizontal:width(9),marginBottom:height(8)}}>
                <CustomBox square={false}></CustomBox>
            </View>
            <View style={{alignItems: 'center'}}>
                <CustomButton title='Lets go!'  press={()=>navigate('Profile')}></CustomButton>
            </View>
            
        </Wrapper>
    )
};



export default CreateAcc;
