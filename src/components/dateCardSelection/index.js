import React, { useState } from "react";
import styles from "../../services/utilities/appStyles";
import {Text,View,ScrollView} from "react-native";
import { CustomCard } from "../";
import { width, height, totalSize } from 'react-native-dimension';

export default CustomDateCard =({children,...props})=>{
    const day=  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const [disabler,setDisabler] =useState(false);
    return( 
        <>
            <View style={{alignItems:'center',marginVertical:15}}>
                    <Text style={styles.heading}> Please Enter Details </Text>
            </View>
                <ScrollView horizontal={true} contentContainerStyle={{flexDirection:'row'}}>
                    <View style={{marginLeft:9}}></View>
                    <CustomCard disabler={disabler} setDisabler={setDisabler}>
                    <Text style={{color:'#000000'}}>Today</Text>
                    <Text style={{color:'black'}}>{(new Date().getDate())}</Text> 
                    <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <CustomCard disabler={disabler} setDisabler={setDisabler} >
                        <Text style={{color:'#000000'}}>Tomorrow</Text>
                        <Text style={{color:'black'}}>{(new Date().getDate())+1}</Text> 
                        <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <CustomCard disabler={disabler} setDisabler={setDisabler} >
                        <Text style={{color:'#000000'}}>{day[((new Date().getDay())+2)%day.length]}</Text>
                        <Text style={{color:'black'}}>{(new Date().getDate())+2}</Text> 
                        <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <CustomCard disabler={disabler} setDisabler={setDisabler}>
                        <Text style={{color:'#000000'}}>{day[((new Date().getDay())+3)%day.length]}</Text>
                        <Text style={{color:'black'}}>{(new Date().getDate())+3}</Text> 
                        <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <CustomCard disabler={disabler} setDisabler={setDisabler}>
                        <Text style={{color:'#000000'}}>{day[((new Date().getDay())+4)%day.length]}</Text>
                        <Text style={{color:'black'}}>{(new Date().getDate())+4}</Text> 
                        <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <CustomCard disabler={disabler} setDisabler={setDisabler}>
                        <Text style={{color:'#000000'}}>{day[((new Date().getDay())+5)%day.length]}</Text>
                        <Text style={{color:'black'}}>{(new Date().getDate())+5}</Text> 
                        <Text style={{color:'black'}}>{new Date().toLocaleString('default', { month: 'short' })}</Text> 
                    </CustomCard>
                    <View style={{marginRight:9}}></View>
                </ScrollView>          
        </>
    )
}









