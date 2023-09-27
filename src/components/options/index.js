import React from "react";
import { Text, View,Image, TouchableOpacity} from "react-native";
import {images} from '../../services/utilities'
import { width, height} from 'react-native-dimension';
import { CustomButton,CustomInput,Wrapper} from "../../components";
import styles from "../../services/utilities/appStyles";

export default CustomOptionPicker =({optionsBar=styles.optionsBar,optionsBorder=styles.optionsBorder,optionsContainer=styles.optionsContainer,children,...props})=>{
    const options = props.options;
    return( 
        <>
            <View style={[optionsContainer]}>  
            {children}   
                <View style={[optionsBorder]}>
                    <TouchableOpacity>
                        <View style={[optionsBar]}>
                            <Text style={{color:'black',flex:8}}>{options[0].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={[optionsBar]}>
                            <Text style={{color:'black',flex:8}}>{options[1].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={[optionsBar]}>
                            <Text style={{color:'black',flex:8}}>{options[2].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={[optionsBar]}>
                            <Text style={{color:'black',flex:8}}>{options[3].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={[optionsBar]}>
                            <Text style={{color:'black',flex:8}}>{options[4].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={[styles.optionsBarFinal]}>
                            <Text style={{color:'black',flex:8}}>{options[5].title}</Text>
                            <Image source={images.arrowRight} style={{flex:1,width:'90%',height:'90%'}} resizeMode="center" ></Image>
                        </View>
                        </TouchableOpacity>
                </View>
            </View> 
        </>      
    )
}
