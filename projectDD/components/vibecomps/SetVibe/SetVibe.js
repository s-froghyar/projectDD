//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';


import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';

import Slider from 'react-native-slider';
import styles from './styles';

export default class SetVibe extends Component {
    state = {
      value: 5
    }
    render(){
      return (
        <View style={styles.container}>

          <Text>{this.props.name}</Text>
          <View style={styles.line}>
            <Slider 
              style={styles.slider}
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
              minimumValue={1}
              maximumValue={10}
              step={1}
              maximumTrackTintColor="#d1eaff"
              minimumTrackTintColor='#00f2ff'
              thumbImage={require('../../../assets/wave.png')}
              thumbStyle={styles.tumb}
              />
            <View style={styles.val}><Text style={{fontSize:20}}>{this.state.value}</Text></View>
            
          </View>
        </View>
      )
    }
  }
  