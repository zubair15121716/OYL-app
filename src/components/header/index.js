import React from "react";
import {Text,View} from "react-native";
import styles from "../../services/utilities/appStyles";

export default function CustomHeader({children,...props}) {
  return (
    <>
    <View style={styles.headerTop}>
        <Text style={{fontSize:21,color:'#fff',fontWeight:`${props.weight}`}}>{props.title}</Text>
    </View>
    
    {children}
    </>
  )
}
