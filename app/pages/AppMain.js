/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'; 

import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
// import ChatScreen from './ChatScreen';

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
	  	      selectedTab:'home'
	      };
    }
    render() {
        return (
          <TabNavigator>
			  <TabNavigator.Item
			  	title="主页"
			    selected={this.state.selectedTab === 'home'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../images/home.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../images/home-fill.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'home' })}>
			    <Home {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="聊天"
			    selected={this.state.selectedTab === 'order'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../images/publish.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../images/publish-fill.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'order' })}>
			    <Profile {...this.props}/>
			  </TabNavigator.Item>
			  <TabNavigator.Item
			  	title="我的"
			    selected={this.state.selectedTab === 'center'}
			    selectedTitleStyle={styles.selectedTextStyle}
			    titleStyle={styles.textStyle}
			    renderIcon={() => <Image source={require("../images/people.png")} style={styles.iconStyle}/>}
			    renderSelectedIcon={() => <Image source={require("../images/people-fill.png")} style={styles.iconStyle}/>}
			    onPress={() => this.setState({ selectedTab: 'center' })}>
			    <Settings {...this.props}/>
			  </TabNavigator.Item>
			</TabNavigator>
        );
    }
}
const styles=StyleSheet.create({
   iconStyle:{
       width:26,
       height:26,
   },
   textStyle:{
       color:'#999',
   },
   selectedTextStyle:{
       color:'black',
   }
});
export default AppMain;