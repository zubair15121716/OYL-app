import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/login';
import CreateAcc from '../../screens/auth/createAccount';
import Profile from '../../screens/auth/setUpProfile';
import Home from '../../screens/user/home';
import TabNav from '../home';
import Testing from '../../screens/auth/testing';
import VehicleInfo from '../../screens/user/vehicleSelection';
import ConfirmationSchedule from '../../screens/user/confirmationSchedule';
import VehicleAddedMsg from '../../screens/user/vehicleAdded';
import Payment from '../../screens/user/payment';
import TandServices from '../../screens/user/termsAndServices';
import PriPolicy from '../../screens/user/privacyPolicy';
import Aboutus from '../../screens/user/aboutUs';
import EditProfile from '../../screens/user/editProfile';

const AuthStack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
      <AuthStack.Navigator
        screenOptions={{headerShown:false}}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="CreateAcc" component={CreateAcc} />
        <AuthStack.Screen name="Profile" component={Profile} />
        <AuthStack.Screen name="Home" component={TabNav}></AuthStack.Screen>
        <AuthStack.Screen name="v-Info" component={VehicleInfo}></AuthStack.Screen>   
        <AuthStack.Screen name="v-added" component={VehicleAddedMsg}></AuthStack.Screen>   
        <AuthStack.Screen name="payment" component={Payment}></AuthStack.Screen>   
        <AuthStack.Screen name="confirmMsg-S" component={ConfirmationSchedule}></AuthStack.Screen>
        <AuthStack.Screen name="edit" component={EditProfile}></AuthStack.Screen>
        <AuthStack.Screen name="terms" component={TandServices}></AuthStack.Screen>
        <AuthStack.Screen name="policy" component={PriPolicy}></AuthStack.Screen>
        <AuthStack.Screen name="about" component={Aboutus}></AuthStack.Screen>
        <AuthStack.Screen name="Testing" component={Testing} />
      </AuthStack.Navigator>
  )
}
