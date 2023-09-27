import React from 'react'
import { View,StyleSheet,Text } from 'react-native';
import Login from './src/screens/auth/login';
import Navigation from './src/navigations';
import TabNav from './src/navigations/home';

function App() {
  return (
    <>
    <Navigation></Navigation>
    </>
  )
}

let styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
  }
})

export default App;
