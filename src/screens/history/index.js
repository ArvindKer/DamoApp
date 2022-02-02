//TODO:- imports
import React, { Component } from 'react';
import { View, Text, SafeAreaView, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DeleteAllHistory } from '../../redux/action/history_action'
import AssetsImages from '../../res'
import global_style from '../../global/global_style';
import styles from './styles'
import TopBar from '../../components/topbar';

//TODO:- history class
class History extends Component {

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
        {
          this.props.history_reducer.history_data.length != 0 ?
            <TopBar
              leftBtnImg={AssetsImages.icon_menu}
              leftBtnOnpress={() => { this.props.navigation.openDrawer(); }}
              title={"History"}
              rightBtnImg={AssetsImages.delete_all}
              rightBtnOnpress={() => {
                Alert.alert(
                  "Delete all history",
                  "Are you sure, you want to delete all your history?",
                  [
                    {
                      text: 'Yes',
                      onPress: () => {
                        this.props.DeleteAllHistory();
                      },
                    },
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                  ],
                  { cancelable: false }
                )
              }}
            />
            :
            <TopBar
              leftBtnImg={AssetsImages.icon_menu}
              leftBtnOnpress={() => { this.props.navigation.openDrawer(); }}
              title={"History"}
            />
        }
        {
          this.props.history_reducer.history_data.length == 0 ?
            <View style={global_style.common_container}>
              <Text style={global_style.common_txt}> No data in history </Text>
            </View>
            :
            <FlatList
              style={styles.flatlist}
              showsVerticalScrollIndicator={false}
              data={this.props.history_reducer.history_data}
              renderItem={({ item, index }) => {
                return (
                  <View
                    style={[styles.flatlist_item, global_style.shadow_sty]}
                  >
                    <Text style={styles.flatlist_txt}> {item.input_data} </Text>
                  </View>
                );
              }}
            />
        }
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return { history_reducer: state.history_reducer, }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    DeleteAllHistory
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(History);
