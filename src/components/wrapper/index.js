import React from "react";
import {View,ImageBackground} from "react-native";
import styles from "../../services/utilities/appStyles";
import {images} from '../../services/utilities'

export default function Wrapper({children,Bg=true,...props}) {
  return (
    <View style={styles.container}>
      {Bg && <ImageBackground source={images.backgroundimg} style={styles.bgimg}>
              {children}
            </ImageBackground> }
      {!Bg && children}
    </View>
  )
}
