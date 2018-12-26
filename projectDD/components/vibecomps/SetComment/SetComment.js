//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';


import {Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, ScrollView} from 'react-native';

import styles from './styles';

export default class SetComment extends Component {
    state = {
      value: "How was your mood?"
    }
    render(){
      return (

          <View style={styles.container}>

            <Text>{this.props.name}</Text>
            <View style={styles.line}>
              <TextInput
              value={this.state.value}
              style={styles.inpt}/>

            </View>
          </View>
      )
    }
  }
