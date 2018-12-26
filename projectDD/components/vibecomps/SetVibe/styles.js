import EStyleSheet from 'react-native-extended-stylesheet';
import StyleSheet from 'react-native';

export default EStyleSheet.create({

  container:{
    flex: 1,
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
  },
  line:{
    flexDirection: 'row',
    width: '100%',

  },
  slider:{
    alignItems: "stretch",
    width: '90%',
    height: 50
  },
  val:{
    alignItems: 'flex-end',
    marginLeft: '1%',
    marginTop: 12,

    width: '8%',
    height: 50
  },
  tumb:{
    backgroundColor: '#003366'

  }


});
