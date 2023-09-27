import React from "react";
import {ScrollView, Text, View,ImageBackground, Image, TextInput,Modal} from "react-native";
import {images} from '../../../services/utilities'
import { width, height, totalSize } from 'react-native-dimension';
import { CustomBox, CustomButton, CustomHeader ,CustomInputCard} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function VehicleInfo(){
    const {navigate} = useNavigation();
    return(
        <>  
        <View style={{backgroundColor:'#fff', flex:1}}>
            <CustomHeader title="Vehicle Info" weight="bold"></CustomHeader>
            <ScrollView>
            <View style={{flex:1,alignItems:'center',marginTop:height(1),marginBottom:height(1)}}>
                <Text style={styles.heading}>Please Enter Details</Text>
            </View>
            <CustomInputCard edit={true} image={false} title='Vehicle Year' placeholder='Enter the year of your Vehicle'></CustomInputCard>
            <CustomInputCard edit={true} image={false} title='Vehicle Make' placeholder='Enter make of your Vehicle'></CustomInputCard>
            <CustomInputCard edit={true} image={false} title='Vehicle Model' placeholder='Enter model of your Vehicle'></CustomInputCard>
            <CustomInputCard edit={true} image={false} title='Vehicle Color' placeholder='Enter color of your Vehicle'></CustomInputCard>
            <CustomInputCard edit={true} image={false} title='Vehicle Mileage' placeholder='If unknown enter approximate'></CustomInputCard>
            <View style={{marginLeft:width(9),marginTop:height(1),marginBottom:height(1)}}>
            <CustomBox marginR={600} textColor="black" bg="white" label='Pull info from profile here'></CustomBox>
            </View>
            <View style={{alignItems:"center",marginTop:height(1),marginBottom:height(1)}}>
                <CustomButton press={()=>navigate('v-added')} touchStyle={[styles.button,{backgroundColor:'black'}]} textStyle={[styles.customButtonText,{color:'white'}]} title='ADD'></CustomButton>
            </View>
            </ScrollView>
        </View>
        </>
    )
};



export default VehicleInfo;
