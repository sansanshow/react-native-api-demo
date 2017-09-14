// import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import ChatScreen from './pages/ChatScreen';
import HomeScreen from './pages/HomeScreen';
import ThirdScreen from './pages/ThirdScreen';
import Settings from './pages/Settings';
import ProfileScreen from './pages/ProfileScreen';

const MainScreenNavigator = TabNavigator({
    Main: { screen: HomeScreen },
    Mine: { screen: Settings },
},
{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: '#666666',
        inactiveBackgroundColor: '#000000',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#f5f5f5',
        },
        tabStyle: {
            backgroundColor: '#cccccc',
        },
    }
})
const SimpleApp = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Chat: { screen: ChatScreen },
    Third: { screen: ThirdScreen },
    // Settings: { screen: Settings },
    Profile: {
        screen: ProfileScreen,
        path:'app/profile', //使用url导航时用到, 如 web app 和 Deep Linking
        navigationOptions:{ // // 此处设置了, 会覆盖组件内的`static navigationOptions`设置
            title: 'ModifyProfile'
        }
    },
}
    // , {
    // initialRouteName: 'Home', // 默认显示界面
    // navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
    //     header: {  // 导航栏相关设置项
    //         backTitle: '返回',  // 左上角返回键文字
    //         style: {
    //             backgroundColor: '#fff'
    //         },
    //         titleStyle: {
    //             color: 'green'
    //         }
    //     },
    //     cardStack: {
    //         gesturesEnabled: true
    //     }
    // },
//     mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
//     headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
//     onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
//     onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
// }
);
AppRegistry.registerComponent('AwesomeProjectDemo', () => SimpleApp);
