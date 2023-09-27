import React from "react";
import {Text, View, Image ,ImageBackground} from "react-native";
import {images} from '../../../services/utilities'
import { width, height } from 'react-native-dimension';
import {CustomButton} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function VehicleAddedMsg(){
    const {navigate} = useNavigation();
    return(
        <>  
            <View style={{flex:1,justifyContent:'flex-end'}}> 
            <View style={[styles.headerBottom]}>
            <Image source={images.circleCheck} resizeMode="contain" style={{maxHeight:height(20),aspectRatio: 0.5,marginBottom:0,paddingBottom:0}}></Image>
            <Text style={[styles.addedMsg,{textAlign: 'center',}]}>Vehicle has been added successfully! {'\n'} One step left!</Text>
            <CustomButton title='CONTINUE' press={()=>navigate('payment')} touchStyle={[styles.button,{marginTop:height(3)}]}></CustomButton>
            </View>
            </View>
        </>
    )
};



export default VehicleAddedMsg;
