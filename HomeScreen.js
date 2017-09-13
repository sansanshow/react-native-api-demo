import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
} from 'react-native';
import { StackNavigator, NavigationActions, TabNavigator } from 'react-navigation';

const navigateAction = NavigationActions.navigate({
  routeName: 'Third',
  params: {info: 'Page Third',title: 'Thir from NavigationActions'},

  // navigate can have a nested navigate action that will be run inside the child router
  action: NavigationActions.navigate({ routeName: 'SubProfileRoute'})
});

const resetAction = NavigationActions.reset({
  index: 1,
  actions: [
    NavigationActions.navigate({ routeName: 'Profile'}),
    NavigationActions.navigate({ routeName: 'Chat'})
  ]
});
export default class HomeScreen extends Component {
    constructor(){
        super();
        // 默认选中
        this.state = { // 构造方法中不能使用this.setState()
            
        };
    }
    static navigationOptions = {
        // title: '首页',
        header: null,
        tabBarLabel: '首页',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('./images/home.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user: 'Lucy'})}
                    title="Chat with Lucy"/>
                <Text>Go Third</Text>
                <Button
                    onPress={() => navigate('Third',{title: 'Third'})}
                    title="Third"/>
                <Text>Go Settings</Text>
                <Button
                    onPress={() => navigate('Settings')}
                    title="Settings"/>
                <Text>NavigationActions--dispatch</Text>
                <Button
                    onPress={() => this.props.navigation.dispatch(navigateAction)}
                    title="Third-Nav"/>
                <Text>NavigationActions--reset</Text>
                <Button
                    onPress={() => this.props.navigation.dispatch(resetAction)}
                    title="ResetAction"/>
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    icon: {
        width: 26,
        height: 26,
    },
  
});
