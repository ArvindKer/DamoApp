//TODO:- imports
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import global_style from '../../global/global_style';

//TODO:- Common Button
export default ({
    ...props
}) => {
    return (
        <TouchableOpacity style={[props.btnSty, global_style.shadow_sty]}
          onPress={props.onPress}
        >
          <Text style={props.txtSty}>{props.title}</Text>
        </TouchableOpacity>
    )
};
