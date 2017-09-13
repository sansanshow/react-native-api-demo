import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
export default class Settings extends Component {
    static navigationOptions = {
        title: '设置',
        header: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Settings!</Text>
            </View>
        );
    }
}