import React from "react";
import {Text, View, Image ,ImageBackground} from "react-native";
import {images} from '../../../services/utilities'
import { width, height } from 'react-native-dimension';
import {CustomButton, Wrapper} from "../../../components";
import styles from "../../../services/utilities/appStyles";
import { useNavigation } from '@react-navigation/native';


function TandServices(){
    const {navigate} = useNavigation();
    return(
        <>  
            <Wrapper>
        <Text style={[styles.heading,{textAlign:'center',color:'white'}]}>Terms of Service</Text>
        <Text
          style={[
            styles.appColor,
            {
              textAlign: 'justify',
              paddingHorizontal: width(5),
              paddingVertical: width(5),
            },
          ]}>
          Integer at faucibus urna. Nullam condimentum leo id elit sagittis
          auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam
          elementum. Etiam elementum euismod commodo. 
          {'\n'}
          {'\n'}Proin eleifend eget quamut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit
          amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed
          condimentum a, posuere vel enim. Integer at faucibus urna. Nullam
          condimentum leo id elit sagittis auctor.
          {'\n'}
          {'\n'}Curabitur elementum nunc aleo imperdiet, nec elementum diam elementum. Etiam elementum euismod
          commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan
          mauris. Phasellus egestas et risus sit amet hendrerit.
          Nulla facilisi.
          {'\n'}
          {'\n'}Cras urna sem, vulputate sed condimentum a, posuere vel enim. Integer
          at faucibus urna. Nullam condimentum leo id elit sagittis auctor.
          Curabitur elementum nunc a leo imperdiet, nec elementum diam
          elementum.
          {'\n'}
          {'\n'}Etiam elementum euismod commodo. Proin eleifend eget quam
          ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit
          amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed
          condimentum a, posuere vel enim.
        </Text>
      </Wrapper>
        </>
    )
};



export default TandServices;
