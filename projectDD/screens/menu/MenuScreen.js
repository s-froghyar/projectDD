//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { VibeOfDay } from '../../components/menucomps/VibeOfDay';
import { AddVibe } from '../../components/menucomps/AddVibe';


import styles from './styles';

export default class MenuScreen extends Component {

    render(){
      return (
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ProjectDD', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}/>
          <VibeOfDay/>
          <VibeOfDay/>
          <VibeOfDay/>
          <AddVibe/>
      </View>
      )
    }
  }
  