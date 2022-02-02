//TODO:- imports
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import global_style from '../../global/global_style';

//TODO:- Tab Bar
export default ({
    ...props
}) => {
    return (
        <View style={global_style.top_navigation_bar_container}>
            <TouchableOpacity style={[global_style.menu_btn, { marginLeft: 16, }]}
                onPress={props.leftBtnOnpress}
            >
                <Image style={global_style.menu_btn_img} source={props.leftBtnImg} />
            </TouchableOpacity>
            <Text style={global_style.top_navigation_bar_txt}>{props.title}</Text>
            <TouchableOpacity style={[global_style.menu_btn, { marginRight: 16, }]}
                onPress={props.rightBtnOnpress}
            >
                <Image style={global_style.menu_btn_img} source={props.rightBtnImg} />
            </TouchableOpacity>
        </View>
    )
};
