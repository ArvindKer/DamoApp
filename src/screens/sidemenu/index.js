
//TODO:- imports
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import AssetsImages from '../../res'
import global_style from '../../global/global_style';
import styles from './styles'

//TODO:- sideMenu class
export default class SideMenu extends Component {

  //TODO:- constructor
  constructor(props) {
    super(props);
    this.state = {
      refresh: true,
      sideMenuBtnList: [
        {
          title: "Home",
          selectedImg: AssetsImages.sm_home_on,
          unSelectedImg: AssetsImages.sm_home_off,
          isSelected: true,
          index: 0
        },
        {
          title: "Profile",
          selectedImg: AssetsImages.sm_profile_on,
          unSelectedImg: AssetsImages.sm_profile_off,
          isSelected: false,
          index: 1
        },
      ],
    };
  }

  //TODO:- onPress events
  onPressMenuButtn = item => {
    switch (item.title) {
      case "Home":
        this.props.navigation.navigate("Home");
        this.props.navigation.closeDrawer();
        this.state.sideMenuBtnList.map((item) => {
          item.title == "Home" ? item.isSelected = true : item.isSelected = false
        })
        break;
      case "Profile":
        this.props.navigation.navigate("Profile");
        this.props.navigation.closeDrawer();
        this.state.sideMenuBtnList.map((item) => {
          item.title == "Profile" ? item.isSelected = true : item.isSelected = false
        })
        break;
      default:
        console.log("hello");
    }
  };

  //TODO:- render event
  render() {
    return (
      <SafeAreaView style={global_style.safearea_container}>

        <View style={global_style.top_navigation_bar_container}>
          <Text style={global_style.top_navigation_bar_txt}>SideMenu</Text>
        </View>

        <View style={styles.flatlist_container}>
          <FlatList
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={this.state.sideMenuBtnList}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={[styles.flatlist_btn, { backgroundColor: item.isSelected == true ? "#fff" : null, }]}
                  onPress={this.onPressMenuButtn.bind(this, item)}
                >
                  <Image
                    style={styles.flatlist_img}
                    source={item.isSelected == true ? item.selectedImg : item.unSelectedImg}
                  />
                  <Text style={[styles.flatlist_txt, { color: item.isSelected == true ? "#fff" : "#000", color: item.isSelected == true ? "#BDD63B" : "#fff" }]}> {item.title} </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>

      </SafeAreaView>
    );
  }
}
