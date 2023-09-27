import React from "react";
import {ScrollView, Text, View,ImageBackground, Image, TextInput,KeyboardAvoidingView, Platform} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import { CustomButton,CustomInput,Wrapper,CustomBox} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


export default function Profile(){
    const {navigate} = useNavigation();
    return(
        <Wrapper>
            <ScrollView>
            <CustomInput viewStyle={[{marginTop:height(4),marginBottom:height(0.8)},styles.textArea]} placeholder='Enter your First Name' title="First Name"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter your Last Name' title="Last Name"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='09 / 08 / 1996' title="Birthday"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter the make of your Vehicle' title="Vehicle Make"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter model of your Vehicle' title="Vehicle Model"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter year of your Vehicle' title="Vehicle Year"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter color of your Vehicle' title="Vehicle Color"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='If unknown enter approximate' title="Vehicle Mileage"></CustomInput>
            <View style={{alignItems:'center'}}>
                <CustomButton title='DONE' press={()=>navigate('auth-app',{ screen: 'Home' })}  ></CustomButton>
            </View>
            </ScrollView>
        </Wrapper>
    )
};


