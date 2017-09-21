import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    Button,
    View
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import TabNavigator from 'react-native-tab-navigator';  // 底部导航
const TabNavigatorItem = TabNavigator.Item;
//默认选项
const TAB_HOME_NORMAL=require('./images/home.png');
const TAB_MINE_NORMAL=require('./images/people.png');
//选中
const TAB_HOME_PRESS=require('./images/home-fill.png');
const TAB_MINE_PRESS=require('./images/people-fill.png');

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
    NavigationActions.navigate({ routeName: 'Settings'})
  ]
});
export default class HomeScreen extends Component {
    constructor(){
        super();
        // 默认选中
        this.state = { // 构造方法中不能使用this.setState()
            selectedTab:'Home',
        };
    }
    static navigationOptions = {
        title: 'Welcome',
    }
    //点击方法
    onPress(tabName){
        if(tabName){
            this.setState({
                selectedTab:tabName,
            });
        }
    }
    //渲染选项
    renderTabView(title,tabName,tabContent,isBadge){
        var tabNomal;
        var tabPress;
        switch (tabName) {
            case 'Home':
            tabNomal=TAB_HOME_NORMAL;
            tabPress=TAB_HOME_PRESS;
            break;
        case 'Mine':
            tabNomal=TAB_MINE_NORMAL;
            tabPress=TAB_MINE_PRESS;
            break;
            default:

        }
         return(
            <TabNavigatorItem
                selected={this.state.selectedTab===tabName}
                title={title}
                titleStyle={styles.tabText}
                selectedTitleStyle={styles.selectedTabText}
                renderIcon={()=><Image style={styles.icon} source={tabNomal}/>}
                renderSelectedIcon={()=><Image style={styles.icon} source={tabPress}/>}

                onPress={()=>this.onPress(tabName)}
                renderBadge={()=>isBadge?<View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View>:null}>
                <View style={styles.page}><Text>{tabContent}</Text></View>
            </TabNavigatorItem>
        );
    }
     //自定义TabView
    tabBarView(){
        return (
            <TabNavigator
                tabBarStyle={styles.tab}>
                {this.renderTabView('首页','Home','首页模块',true)}
                {this.renderTabView('我的','Mine','我的模块',false)}
            </TabNavigator>
        );
    }
    
    render() {
        const { navigate } = this.props.navigation;
        var tabView=this.tabBarView();
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
                {/*{tabView}*/}
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        fontSize: 10,
        color: 'black'
    },
    selectedTabText: {
        fontSize: 10,
        color: 'green'
    },
    tab:{
        height: 52,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    },
    tabIcon:{
        width:25,
        height:25,
    },
    badgeView:{
        width:22,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:10,
        marginTop:3,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
            color:'#fff',
            fontSize:8,
    },
    icon: {
        width: 22,
        height: 22
    },
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
});
