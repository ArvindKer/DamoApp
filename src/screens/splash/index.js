//TODO:- imports
import React, { useEffect, useState } from 'react';
import { StatusBar, View, Image, Animated } from 'react-native';
import styles from './styles';
import AssetsImages from '../../res'
import { CONST } from '../../global/constants'
import CommonBtn from '../../components/common_btn'

//TODO:- splash class
export default ({ navigation }) => {

    const [translationImg, setTranslationImg] = useState(new Animated.Value((CONST.DEVICE_HEIGHT / 2) - 90));
    const [translationBtn, setTranslationBtn] = useState(new Animated.Value(CONST.DEVICE_HEIGHT));

    useEffect(() => {
        Animated.timing(translationImg, {
            toValue: 80,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
            Animated.spring(translationBtn, {
                toValue: (CONST.DEVICE_HEIGHT / 2) - 90,
                duration: 1500,
                friction: 3,
                tension: 3,
                useNativeDriver: true
            }).start();
        });

    }, []);

    //TODO:- return event
    return (
        <View style={styles.main_container} >
            <StatusBar backgroundColor="#fff" barStyle='light-content' />
            <View style={styles.container}>
                <Animated.View style={[styles.animated_img_view, { transform: [{ translateY: translationImg }] }]}>
                    <Image source={AssetsImages.demo_app} style={{ height: 180, width: 180, resizeMode: 'contain' }} />
                </Animated.View>
                <Animated.View style={[styles.animated_btn_view, { transform: [{ translateY: translationBtn }] }]}>
                    <CommonBtn
                        btnSty={styles.start_btn}
                        onPress={() => {
                            navigation.navigate("AppDrawer");
                        }}
                        title={"Let's Start"}
                        txtSty={styles.start_txt}
                    />
                </Animated.View>
            </View>
        </View>
    );
}
