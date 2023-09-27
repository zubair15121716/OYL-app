import React,{useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image} from "react-native";
import MyAccount from '../../screens/user/account';
import Home from '../../screens/user/home';
import { width, height, totalSize } from 'react-native-dimension';
import { images } from '../../services/utilities';


const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator screenOptions={{headerShown:false}} > 
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Image source={(focused? images.homedark:images.home)} style={{width:width(8),height:height(4)}} resizeMode='contain'></Image>
          ),
        }}/>
        <Tab.Screen name="Account" component={MyAccount} options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ focused }) => (
            <Image source={(focused? images.user:images.userDark)} style={{width:width(8),height:height(4)}} resizeMode='contain'></Image>
          ),
        }}/>
      </Tab.Navigator>
  )
}

// resizeMode='contain'