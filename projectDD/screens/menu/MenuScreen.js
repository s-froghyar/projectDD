//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { VibeOfDay } from '../../components/menucomps/VibeOfDay';
import { AddVibe } from '../../components/menucomps/AddVibe';


import styles from './styles';




export default class MenuScreen extends Component {

    loadVibe = (id) =>{
      console.log("we out here" + id);
      this.props.navigation.navigate('Vibe');
    }


    render(){
      return (
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'ProjectDD', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}/>
          <VibeOfDay
            goto={this.loadVibe}
            />
          <VibeOfDay/>
          <VibeOfDay/>
          <AddVibe/>
      </View>
      )
    }
  }
