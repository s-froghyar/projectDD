//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';

import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { VibeOfDay } from '../../components/menucomps/VibeOfDay';
import { AddVibe } from '../../components/menucomps/AddVibe';
import { SetVibe } from '../../components/vibecomps/SetVibe';
import { SetComment } from '../../components/vibecomps/SetComment';


import styles from './styles';

export default class VibeScreen extends Component {
  constructor(props) {
    super(props)
    this.handleNerv = this.handleNerv.bind(this);
    this.handlePanic = this.handlePanic.bind(this);
    this.handleHr = this.handleHr.bind(this);
    this.handleHv = this.handleHv.bind(this);
    this.handleSweat = this.handleSweat.bind(this);
    this.handleTrembling = this.handleTrembling.bind(this);
    this.handleWeak = this.handleWeak.bind(this);
    this.state = {
      nerv : 5,
      panic : 5,
      hr : 5,
      hv : 5,
      sweat : 5,
      trembling : 5,
      weak : 5,
      comment : "",
      canCollect : false
    }
  }



    //handlers:
    handleNerv(data){
      this.setState({
        nerv : data
      });
    }
    handlePanic(data){
      this.setState({
        panic : data
      });
    }
    handleHr(data){
      this.setState({
        hr : data
      });
    }
    handleHv(data){
      this.setState({
        hv : data
      });
    }
    handleSweat(data){
      this.setState({
        sweat : data
      });
    }
    handleTrembling(data){
      this.setState({
        trembling : data
      });
    }
    handleWeak(data){
      this.setState({
        weak : data
      });
    }
    handleComment(data){
      this.setState({
        comment : data
      });
    }
    handleCollect(){
      this.setState({canCollect : true});
    }
    render(){
      if(this.state.canCollect){
        console.log("collect it lad");
        console.log(this.state);
      }


      return (
        <View style={styles.container}>
        <Header
          leftComponent={<TouchableOpacity onPress={(e) => {this.props.navigation.navigate('Home')}}>
                            <Image
                              source={require('../../assets/back.png')}
                              style={{width: 20, height: 20}}
                              />
                          </TouchableOpacity>}
          centerComponent={{ text: 'Set your current vibe', style: { color: '#fff' } }}
          rightComponent={<TouchableOpacity onPress={() => this.setState({canCollect : true})}>
                            <Image
                              source={require('../../assets/tick.png')}
                              style={{width: 20, height: 20}}
                              />
                          </TouchableOpacity>}/>
        <KeyboardAvoidingView
          style={styles.container}
          behavior='padding'
          >
        <Image
          source={require('../../assets/lotus.png')}/>
        <SetVibe
        name="Nervouseness"
        handlerFromParent = {this.handleNerv}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Panic"
        handlerFromParent = {this.handlePanic}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Increased Heartrate"
        handlerFromParent = {this.handleHr}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Hyperventilation"
        handlerFromParent = {this.handleHv}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Sweating"
        handlerFromParent = {this.handleSweat}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Trembling"
        handlerFromParent = {this.handleTrembling}
        canCollect = {this.state.canCollect}/>
        <SetVibe
        name="Weakness / Tiredness"
        handlerFromParent = {this.handleWeak}
        canCollect = {this.state.canCollect}/>

        <SetComment
        val={this.state.comment}
        handlerFromParent = {this.handleComment}
        canCollect = {this.state.canCollect}/>
        </KeyboardAvoidingView>
      </View>
      )
    }
  }
