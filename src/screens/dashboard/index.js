//TODO:- imports
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddToHistory } from '../../redux/action/history_action'
import AssetsImages from '../../res'
import global_style from '../../global/global_style';
import styles from './styles';
import TopBar from '../../components/topbar';

//TODO:- dashboard class
class Dashboard extends Component {

  //TODO:- constructor
  constructor(props) {
    super(props);
    this.state = {
      txt_field_data: ""
    };
  }

  //TODO:- render event
  render() {
    return (
      <SafeAreaView style={global_style.safearea_container}>
        <TopBar
          leftBtnImg={AssetsImages.icon_menu}
          leftBtnOnpress={() => { this.props.navigation.openDrawer(); }}
          title={"Dashboard"}
        />
        <TextInput
          style={styles.txtinput_txt_style}
          placeholder="Enter text here"
          placeholderTextColor='rgba(255,255,255,0.6)'
          onChangeText={text => {
            this.setState({ txt_field_data: text });
          }}
          maxLength={25}
          value={this.state.txt_field_data}
        />
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={[styles.submit_btn, global_style.shadow_sty]}
          onPress={() => {
            if (this.state.txt_field_data != "") {
              data = {
                "txt_entered": this.state.txt_field_data
              }
              this.props.AddToHistory(data);
              this.setState({ txt_field_data: "" }, () => {
                Keyboard.dismiss()
                setTimeout(function () {
                  alert("Text entered to history")
                }, 100);
              })
            }
          }}
        >
          <Text style={styles.submit_btn_txt}>Submit</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    AddToHistory
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(Dashboard);

