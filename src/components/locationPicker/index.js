import React from "react";
import {Text,View} from "react-native";
import styles from "../../services/utilities/appStyles";

export default function LocationPicker({children}) {
  return (
    <>
    <View style={styles.headerR}>
        <Text style={{fontSize:21,color:'#fff'}}>Schedule a Time</Text>
    </View>
    
    {children}
    </>
  )
}
