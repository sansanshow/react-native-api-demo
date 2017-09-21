import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
export default class ChatScreen extends Component {
  static navigationOptions = ({navigation }) => ({
    title: `Chatting with ${navigation.state.params.user}`,
  });
  render() {
    // const { params } = this.props.navigation.state;
    const { state, setParams, goBack, navigate } = this.props.navigation;
    return (
        <View>
            <Text>Chat with Lucy
                :{state.params.user}
            </Text>
            <Text>改变navigation.state参数user</Text>
            <Button
                style={styles.btn}
                onPress={() => setParams({user: 'Jack'})}
                title="Set title name to 'Jack'"
            />
            <Text>Go Third</Text>
                <Button
                    onPress={() => navigate('Third',{title: 'Third'})}
                    title="Third"/>
            <Text>goBack--路由返回示例</Text>
            <Text>1--路由返回上一层goBack()</Text>
            <Button 
                style={styles.btn}
                onPress={() => goBack()}
                title="Go back from this HomeScreen"
            />
            <Text>2--路由返回goBack(null)</Text>
            <Button
                style={styles.btn}
                onPress={() => goBack(null)}
                title="Go back anywhere"
            />
            <Text>3--路由返回goBack('Screen')返回指定页面</Text>
            <Button
                style={styles.btn}
                onPress={() => goBack('Third')}
                title="Go back from Third"
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