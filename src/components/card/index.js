import React, { useState } from "react";
import styles from "../../services/utilities/appStyles";
import {TouchableOpacity,Text} from "react-native";



export default CustomCard =({children,...props})=>{
    const[selected,setSelect]=useState(false);
    return( 
        <>
            <TouchableOpacity disabled={props.disabler} style={[styles.card,{backgroundColor: selected ? '#FFFFC8' : '#fff',marginVertical:10}]} onPress={()=>
            {
                setSelect(selected ? false:true);
                props.setDisabler(!props.disabler);
            }}>
            {children}
            </TouchableOpacity>
            
        </>
    )
}

 