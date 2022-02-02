//TODO:- imports
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import global_style from '../../global/global_style';

//TODO:- Profile Data View
export default ({
  marginBottom = 0,
  marginTop = 0,
  ...props
}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.txtDataSty}>{props.data}</Text>
      <Text style={styles.txtTitleSty}>{props.title}</Text>
    </View>
  )
};

//TODO:- Styles
const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitleSty: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '500',
  },
  txtDataSty: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 5,
  }
}