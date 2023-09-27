import React from "react";
import {ScrollView, Text, View,ImageBackground, Image, TextInput,KeyboardAvoidingView, Platform} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import { CustomButton,CustomInput,Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function Login(){
    const {navigate} = useNavigation();
    return(
        <Wrapper>
            <KeyboardAvoidingView style={{flex:1}}
                behavior={Platform.OS=='ios'? 'padding':null}
            >
                <ScrollView>
                <View style={{height:20}}/>
                <View style={{alignItems:'center'}}>
                <Image source={images.logo} style={styles.logo} >
                </Image>
                </View>
                <View style={{alignItems:'center'}}> 
                <Text style={[{fontSize:totalSize(1.6)},styles.appColor]}>Enter your phone number to log in!</Text>
                </View>
                <View style={{height:10}}/>
                <CustomInput title='Phone'></CustomInput>
                <View style={styles.banner}> 
                <Text style={[{fontSize:totalSize(1.6),alignItems:'flex-end',color:'white'}]}>Do not have an account?<Text style={styles.appColor} onPress={()=>navigate('Profile')}>Create</Text></Text>   
                </View>
                <View style={{alignItems:'center',marginVertical:width(5)}}> 
                <View style={{height:height(10)}}/>
                <CustomButton title="LUBE ME UP!" press={()=>navigate('CreateAcc')}></CustomButton>
                </View>
                </ScrollView>
                </KeyboardAvoidingView>
            </Wrapper>
    )
};



export default Login;
