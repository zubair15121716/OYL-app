import React from "react";
import {ScrollView, Text, View} from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import { CustomButton, Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function EditProfile(){
    const {navigate} = useNavigation();
    return (
      <>
       <Wrapper>
            <ScrollView>
            <Text style={[styles.heading,{color:'#FFFFC8',textAlign:'center'}]}>Edit Profile</Text>
            <CustomInput viewStyle={[{marginTop:height(4),marginBottom:height(0.8)},styles.textArea]} placeholder='Enter your First Name' title="First Name"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter your Last Name' title="Last Name"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='09 / 08 / 1996' title="Birthday"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter the make of your Vehicle' title="Vehicle Make"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter model of your Vehicle' title="Vehicle Model"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter year of your Vehicle' title="Vehicle Year"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='Enter color of your Vehicle' title="Vehicle Color"></CustomInput>
            <CustomInput viewStyle={[{marginBottom:height(0.8)},styles.textArea]} placeholder='If unknown enter approximate' title="Vehicle Mileage"></CustomInput>
            <View style={{alignItems:'center'}}>
                <CustomButton title='Save Changes' press={()=>navigate('auth-app',{ screen: 'Home' })}  ></CustomButton>
            </View>
            </ScrollView>
        </Wrapper>
      </>
    );
};



export default EditProfile;
