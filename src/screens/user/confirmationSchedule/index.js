import React from "react";
import {Text, View, Image} from "react-native";
import {images} from '../../../services/utilities'
import { width, height } from 'react-native-dimension';
import {CustomButton} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function ConfirmationSchedule(){
    const {navigate} = useNavigation();
    return(
        <>  
        <View style={{flex:1,justifyContent:'flex-end'}}> 
        <View style={styles.headerBottom}>
        <Image source={images.circleCheck} resizeMode="contain" style={{maxHeight:height(20),aspectRatio: 0.5,marginBottom:0,paddingBottom:0}}></Image>
        <Text style={[styles.heading,{color:'white',marginTop:0,fontSize:32}]}>Congratulations!</Text>
        <Text style={styles.confirmationMsg}>We will see you on{`\n`}[DATE SCHEDULED]</Text>
        <CustomButton title='CONTINUE' press={()=>{navigate('about')}} touchStyle={[styles.button,{marginTop:height(3)}]}></CustomButton>
        </View>
        </View>
        </>
    )
};



export default ConfirmationSchedule;
