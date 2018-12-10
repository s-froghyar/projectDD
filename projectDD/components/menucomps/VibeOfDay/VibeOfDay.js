//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';


import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

import styles from './styles';

export default class VibeOfDay extends Component {

    render(){
      return (
        <TouchableOpacity
          style={{opacity: 0.5, marginTop: '10%'}}
          onPress={() => {console.log('item chosen')}}>
            <View style={styles.container}>
                <Image source={require('../../../assets/lotus.png')}/>
            </View>
        </TouchableOpacity>
      )
    }
  }
  