/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   Image,
//   View
// } from 'react-native';
// // 导航器
// import {
//   StackNavigator,
// } from 'react-navigation';

// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { showText: true };

//     // 每1000毫秒对showText状态做一次取反操作
//     setInterval(() => {
//       this.setState(previousState => {
//         return { showText: !previousState.showText };
//       });
//     }, 1000);
//   }

//   render() {
//     // 根据当前showText的值决定是否显示text内容
//     let display = this.state.showText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }
// export default class HelloWorld extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ''};
//   },
//   changeText(e) {
//     this.setState({text: e.target.value});
//   },
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!??? !!try it~555
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.android.js
//         </Text>
//         <Text style={styles.instructions}>
//           Double tap R on your keyboard to reload,{'\n'}
//           Shake or press menu button for dev menu
//         </Text>
//         <Blink text='I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <TextInput
//           style={{height: 40}}
//           placeholder="Type here to translate!"
//           onChangeText={this.changeText}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word) => word && '🍕1').join(' ')}
//         </Text>
//         <Image source={pic} style={{width: 193, height: 110}} />
//       </View>
//       // <View style={{ height: 300}}>
//       //   <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//       //   <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//       //   <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       // </View>
//     );
    
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: 'red'
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });


import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import rootApp from './app/root';
// 注意，这里用引号括起来的'HelloWorldApp'必须和你init创建的项目名一致
AppRegistry.registerComponent('AwesomeProjectDemo', () => rootApp);
