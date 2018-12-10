//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { VibeOfDay } from '../../components/menucomps/VibeOfDay';
import { AddVibe } from '../../components/menucomps/AddVibe';
import { SetVibe } from '../../components/vibecomps/SetVibe';


import styles from './styles';

export default class VibeScreen extends Component {

    render(){
      return (
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff' }}
          centerComponent={{ text: 'Set your current vibe', style: { color: '#fff' } }}/>
        
        <Image
          source={require('../../assets/lotus.png')}/>
        <SetVibe
        name="Nervouseness"/>
        <SetVibe
        name="Panic"/>
        <SetVibe
        name="Increased Heartrate"/>
        <SetVibe
        name="Hyperventilation"/>
        <SetVibe
        name="Sweating"/>
        <SetVibe
        name="Trembling"/>
        <SetVibe
        name="Weakness / Tiredness"/>
        
      </View>
      )
    }
  }
  