import React, {Component} from 'react';
import{ 
	Text,
	View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
// import {Provider} from 'react-redux'
// import configureStore from './store/configure-store'

// import App from './App';
import AppMain from './pages/AppMain';
import ChatScreen from './pages/ChatScreen';
import ThirdScreen from './pages/ThirdScreen';

// const store = configureStore();


const SimpleApp = StackNavigator({
    Home: { screen: AppMain },
    Chat: { screen: ChatScreen }, 
    Third: { screen: ThirdScreen },
})

// class rootApp extends Component {
// 	render() {
// 		return (
// 			// <Provider store={store}>
//             //    <App/>
//             // </Provider>
// 			<View style={{flex: 1}}>
//             	<AppMain/>
// 				{/*<Text>1111</Text>*/}

// 			</View>
// 		)
// 	}
// }
export default SimpleApp;