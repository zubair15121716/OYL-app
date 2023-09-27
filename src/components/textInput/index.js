import React from "react";
import {Text,View,TextInput} from "react-native";
import styles from "../../services/utilities/appStyles";

export default CustomInput =({textStyle=styles.textInput,viewStyle=styles.textArea,...props})=>{
    return(
        <View style={viewStyle}>
            <Text style={textStyle}>{props.title}</Text>
            <TextInput style={{color:'#000000',fontSize:12}} placeholder={props.placeholder} placeholderTextColor="#444444D4"></TextInput>
        </View>
    )
}





