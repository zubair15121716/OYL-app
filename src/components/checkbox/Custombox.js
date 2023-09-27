import React from "react";
import {Text,View} from "react-native";
import styles from "../../services/utilities/appStyles";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function CustomBox({label=`I accept the Terms of Service and Privacy Policy`,square=true,textColor="#FFFFC8",marginR=0,bg='#000000',...props}) {
  return (
    <>
    <View style={{flexDirection:"row"}}>
      {square && <BouncyCheckbox iconStyle={{color:'black'}} fillColor="black"  innerIconStyle={{backgroundColor:`${textColor}`,borderRadius: 0, borderWidth: 2 }} style={{marginLeft:{marginR}}} disableText={true}></BouncyCheckbox>}
      {!square && <BouncyCheckbox iconStyle={{color:'black'}} fillColor="#FFFFC8"  innerIconStyle={{backgroundColor:`black`}} style={{marginLeft:{marginR}}} disableText={true}></BouncyCheckbox>}
      <Text style={{fontSize:11,marginTop:4,marginLeft:7,color:`${textColor}`}}>{label}</Text>
    </View>
    </>
  )
}
