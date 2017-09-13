import React, {Component} from 'react';
import{ 
	Text,
	View,
} from 'react-native';
// import {Provider} from 'react-redux'
// import configureStore from './store/configure-store'

// import App from './App';
import AppMain from './pages/AppMain';

// const store = configureStore();

class rootApp extends Component {
	render() {
		return (
			// <Provider store={store}>
            //    <App/>
            // </Provider>
			<View style={{flex: 1}}>
            	<AppMain/>
				{/*<Text>1111</Text>*/}

			</View>
		)
	}
}
export default rootApp;