import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
export default class ProfileScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, ProfileScreen!</Text>
            </View>
        );
    }
}