//TODO:- imports
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import global_style from '../../global/global_style';
import AssetsImages from '../../res';

//TODO:- Profile Sub View
export default ({
  marginBottom = 0,
  marginTop = 0,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.btnSty, { marginBottom, marginTop }]}
      onPress={props.onPress}
    >
      <View style={styles.imgContainer}>
        <Image style={styles.imgSty} source={props.img} />
      </View>
      <Text style={styles.txtSty}>{props.title}</Text>
      <Image style={styles.imgSty} source={AssetsImages.next} />
    </TouchableOpacity>
  )
};

//TODO:- Styles
const styles = {
  btnSty: {
    width: '90%',
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtSty: {
    color: '#2d2d2d',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 10,
    flex: 1,
  },
  imgContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  imgSty: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
}