import React from "react";
import {Text,TouchableOpacity} from "react-native";
import styles from "../../services/utilities/appStyles";
import { width, height, totalSize } from 'react-native-dimension';

export default CustomButton =({textStyle=styles.customButtonText,press=null,touchStyle=styles.button,...props})=>{
    return(
        <TouchableOpacity onPress={press} style={[touchStyle]}>
                    <Text style={textStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}