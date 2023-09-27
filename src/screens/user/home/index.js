import React, { useState } from "react";
import {ScrollView, Text, View, Modal} from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import { CustomCard, CustomHeader,Wrapper, CustomDialogBox,CustomDateCard,CustomInputCard, CustomButton, CustomOptionPicker} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';
import {images} from '../../../services/utilities'
import TabNav from "../../../navigations/home";


function Home(){
    const {navigate} = useNavigation();
    const [modal1,setmodal1] =useState(false);
    const [modal2,setmodal2] =useState(false);
    const options = [
        {      title: 'Manufacturers Recommendation ',    },
        {      title: '0W-20',    },
        {      title: '5W-20',    },
        {      title: '5W-30',    },
        {      title: '10W-30',    },
        {      title: '10W-40',    },
        ];
            
    return(
        <>  
        <View style={{backgroundColor:'#fff', flex:1}}>
            <ScrollView>
                <CustomHeader title='Schedule a Time' ></CustomHeader>
                <CustomDateCard></CustomDateCard>
                <View style={{flexDirection:'column',marginVertical:10}}>
                <Text style={[styles.heading1]}>Enter Time</Text> 
                </View>
                <CustomInputCard modal={modal1} setmodal={setmodal1} title="Enter Location" placeholder="Please enter your address" image={images.location}></CustomInputCard>
                <CustomInputCard modal={modal2} setmodal={setmodal2}  title="Oil type" placeholder={`Please select Oil type from here ${'\n'} (All Oil High Quality Synthetic)`} image={images.dropdown}></CustomInputCard>
                <CustomButton title="Lock it in!" press={()=>navigate('v-Info')} touchStyle={[styles.button,{elevation: 5,shadowColor: 'black',shadowOffset: { width: 0, height: 0 },shadowOpacity: 0.1,shadowRadius: 5,marginLeft:width(22),marginVertical:height(3)}]}></CustomButton>
            </ScrollView>
            {modal1 &&
            <Modal
            backdropOpacity={0.5}
            animationType = {"slide"}
            transparent={true}
            visible={true}
            onRequestClose={() => {
              setmodal1(!modal1);
            }}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'transparent'}}>
                <CustomDialogBox></CustomDialogBox>
                </View>
            </Modal> 
            }
            {modal2 &&
            <Modal
            backdropOpacity={0.5}
            animationType = {"slide"}
            transparent={true}
            visible={true}
            onRequestClose={() => {
              setmodal2(!modal2);
            }}>
                <View style={{flex:1}}>
                
                <CustomOptionPicker options={options}><CustomInputCard modal={modal2} setmodal={setmodal2}  title="Oil type" placeholder={`Please select Oil type from here ${'\n'} (All Oil High Quality Synthetic)`} image={images.dropdown}></CustomInputCard></CustomOptionPicker>
                </View>
            </Modal> 
            }
        </View>
        </>

    )
};



export default Home;
