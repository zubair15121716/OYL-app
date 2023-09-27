import React, { useState } from "react";
import {Modal,View,Text,Image,TouchableOpacity} from "react-native";
import { width, height, totalSize } from 'react-native-dimension';
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';
import { images } from "../../../services/utilities";


function MyAccount(){
    const {navigate} = useNavigation();
    const options = [
    {      title: 'Edit Profile',    },
    {      title: 'Share Your Feedback',    },
    {      title: 'Terms of Service',    },
    {      title: 'Privacy Policy',    },
    {      title: 'About Us',    },
    {      title: 'Logout',    },
    ];
  
    return(
        <>
        
            <View style={{width:width(100),height:height(47),borderTopRightRadius:40,borderTopLeftRadius:40, justifyContent: 'flex-end',marginTop:height(46),backgroundColor:"#fff"}}>     
                <View style={{borderWidth:2,borderColor:"#E9E9E9",borderRadius:10,margin:10 , justifyContent: 'flex-end',}}>
                    <TouchableOpacity onPress={()=>navigate('edit')}>
                        <View style={{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8}}>{options[0].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('about')}>
                        <View style={{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8}}>{options[1].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigate('terms')}>
                        <View style={{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8}}>{options[2].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigate('policy')}>
                        <View style={{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8}}>{options[3].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>navigate('about')}>
                        <View style={{width:width(93),height:43,borderBottomWidth:2,borderBottomColor:"#E9E9E9",padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8}}>{options[4].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigate('Login')}>
                        <View style={{width:width(93),height:43,padding:5,flexDirection:'row'}}>
                            <Text style={{color:'black',flex:8,fontWeight:'bold'}}>{options[5].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                </View>
            </View> 
                    
        
            
        </>

    )
};



export default MyAccount;




