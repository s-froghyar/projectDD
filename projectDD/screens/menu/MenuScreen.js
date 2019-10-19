//---------------------BASIC IMPORTS-----------------
import React, {Component} from 'react';

import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { VibeOfDay } from '../../components/menucomps/VibeOfDay';
import { AddVibe } from '../../components/menucomps/AddVibe';


import styles from './styles';




export default class MenuScreen extends Component {
    state = {
      chosenCategory: 'elon',
      category: [{
          catName: 'Elon Musk',
          folderName: 'elon',
          moods: [
            {
              key: 0,
              text: 'Happy Elon',
              image: require('../../assets/elon/1.png')
            },
            {
              key: 1,
              text: 'Naughty Elon',
              image: require('../../assets/elon/2.png')
            },
            {
              key: 2,
              text: 'Done with your shit Elon',
              image: require('../../assets/elon/3.png')
            },
            {
              key: 3,
              text: 'Confused Elon',
              image: require('../../assets/elon/4.png')
            },
            {
              key: 4,
              text: 'Not Bad Elon',
              image: require('../../assets/elon/5.png')
            },
            {
              key: 5,
              text: 'Yee Boi Elon',
              image: require('../../assets/elon/6.png')
            },
            {
              key: 6,
              text: 'Deep Fried Elon',
              image: require('../../assets/elon/7.png')
            },
            {
              key: 7,
              text: 'Angry Elon',
              image: require('../../assets/elon/8.png')
            },
            {
              key: 8,
              text: 'Sad Elon',
              image: require('../../assets/elon/9.png')
            }]
        }
      ]
    }
    loadVibe = (id) =>{
      console.log("we out here" + id);
      this.props.navigation.navigate('Vibe');
    }

    componentWillMount = () => {
    }
    render(){
      let category = this.state.category.find(cat => cat.folderName === this.state.chosenCategory);
      let moods = this.state.category[0].moods;
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Which {category.catName} are you?</Text>
            </View>
              
            {/*Memes come here */
              moods.map((mood) => {
                return (
                  <TouchableOpacity
                    key={mood.key}
                    style={styles.item}
                    onPress={() => {}}
                  >
                    <Image
                      style={styles.itemIcon}
                      source={mood.image}
                    />
                    <Text style={styles.itemTitle}>
                      {mood.text}
                    </Text>
                  </TouchableOpacity>
                )})
            }
          </View>
        </ScrollView>
          // {/* <VibeOfDay
          //   goto={this.loadVibe}
          //   />
          // <VibeOfDay/>
          // <VibeOfDay/> */}
      )
    }
  }
