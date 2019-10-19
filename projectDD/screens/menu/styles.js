import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';
import { Dimensions } from 'react-native';
export default EStyleSheet.create({
  
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  header: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 30
  },  
  headerText: {
    textAlign: 'center',
    fontSize: 40,
  },  
  item: {
      width: Dimensions.get('window').width * 0.33,
      height: Dimensions.get('window').width * 0.33 + 100,
      borderWidth: 1,
      borderColor: "lightgray",
      alignItems: 'center',
      justifyContent: 'center'
  },
  itemIcon: {
      width: Dimensions.get('window').width * 0.33,
      height: Dimensions.get('window').width * 0.33,
      resizeMode: 'contain',
  },
  itemTitle: {
      fontSize: 25,
      textAlign: 'center',
      width: Dimensions.get('window').width * 0.33,
      backgroundColor: 'red',

  },

});
