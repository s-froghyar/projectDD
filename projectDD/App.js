import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { MenuScreen } from './screens/menu';
import { VibeScreen } from './screens/vibe';


import {createStackNavigator, createAppContainer} from 'react-navigation';


const RootStack = createStackNavigator({
  Home: {
    screen: MenuScreen,
    },
  Vibe:{
    screen: VibeScreen,
  }
  },{
    headerMode: 'none',
    initialRouteName: 'Home'
  } )



EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8'
});


export default createAppContainer(RootStack);
