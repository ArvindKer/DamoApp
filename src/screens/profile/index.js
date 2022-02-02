//TODO:- imports
import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import AssetsImages from '../../res'
import global_style from '../../global/global_style';
import TopBar from '../../components/topbar';
import ProfileSubView from '../../components/profile_sub_view';
import ProfileDataView from '../../components/profile_data_view';
import styles from './styles';

//TODO:- profile class
export default class Profile extends Component {

  //TODO:- constructor
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  //TODO:- render event
  render() {
    return (
      <SafeAreaView style={global_style.safearea_container}>
        <TopBar
          leftBtnOnpress={() => { this.props.navigation.openDrawer(); }}
          leftBtnImg={AssetsImages.icon_menu}
        />
        <View style={global_style.common_container}>
          <View style={styles.container_one}>
            <View style={styles.profile_img_container}>
              <Image style={styles.profile_img} source={AssetsImages.profile_demo} />
            </View>
            <Text style={styles.profile_name}>Erik Groetz</Text>
            <Text style={styles.profile_user_id}>@Dr.Groetz</Text>
            <View style={styles.separator_one} />
            <View style={styles.profile_data_container}>
              <ProfileDataView
                data={"126/750"}
                title={"Scans"}
              />
              <ProfileDataView
                data={"1/6"}
                title={"Users"}
              />
              <ProfileDataView
                data={"317/520"}
                title={"Codes"}
              />
            </View>
          </View>
          <View style={styles.container_two}>
            <View style={styles.profile_sub_view}>
              <ProfileSubView
                title={"Settings"}
                marginTop={20}
                img={AssetsImages.settings}
              />
              <ProfileSubView
                title={"Billing Details"}
                marginTop={10}
                img={AssetsImages.print}
              />
              <View style={styles.separator_two} />
              <ProfileSubView
                title={"Information"}
                marginBottom={10}
                img={AssetsImages.info}
              />
              <ProfileSubView
                title={"Log out"}
                marginBottom={20}
                img={AssetsImages.logout}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
