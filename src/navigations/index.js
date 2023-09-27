import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigation from './auth';
import TabNav from './home';
import App from '../../App';

const AppStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
      screenOptions={{headerShown:false}}
      >
        <AppStack.Screen name='auth-app' component={AuthNavigation}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}