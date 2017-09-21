import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator,NavigationActions } from 'react-navigation';
export default class ThirdScreen extends Component {
  static navigationOptions = ({navigation }) => ({
    title: `${navigation.state.params.title || ''}`,
  });
  render() {
    // const { params } = this.props.navigation.state;
    const { state, setParams, goBack } = this.props.navigation;

    const setParamsAction = NavigationActions.setParams({
        params: { user: 'Hehehe' },
        key: 'Chat-111',
    })
    return (
        <View>
            <Text>Now is Screen
                :{state.params.title || ''}
            </Text>
            <Text>goBack--路由返回示例</Text>
            <Text>1--路由返回上一层goBack()</Text>
            <Button 
                style={styles.btn}
                onPress={() => goBack()}
                title="Go back from this ChatScreen"
            />
            <Text>2--路由返回goBack(null)</Text>
            <Button
                style={styles.btn}
                onPress={() => goBack(null)}
                title="Go back anywhere"
            />
            <Text>3--路由返回goBack('Home')返回指定页面Home</Text>
            <Button
                style={styles.btn}
                onPress={() => goBack('Chat-111')}
                title="Go back from HomeScreen"
            />
            <Text>4--NavigationActions.setParams</Text>
            <Button
                style={styles.btn}
                onPress={() => this.props.navigation.dispatch(setParamsAction)}
                title="setParamsAction"
            />
        </View>
    );
  }
}
const styles = StyleSheet.create({
  btn: {
    margin: 10,
  }
});