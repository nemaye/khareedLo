//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TabNavigate, DrawerNavigate} from './src/routes/navigation'
import SplashScreen from './src/components/SplashScreen'

function switchNavigate(screen) {
  switch (screen) {
    case true:
      return <DrawerNavigate/>
  
    case false:
      return <TabNavigate/>

    default:
      return <SplashScreen/>
  }
}

// create a component
class App extends Component {

  state = {
    screen: null
  }

  componentDidUpdate(){
    this.setState({
      state: false
    })
  }

  render() {
    return (
      switchNavigate(true)
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
