import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Button
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
export default class Profile extends Component {
    constructor(){
        super();
        this.state = {
            dataList: [
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
                {key: 'John13'},
                {key: 'Jillian12'},
                {key: 'Jimmy11'},
                {key: 'Julie10'},
                {key: 'John9'},
                {key: 'Jillian7'},
                {key: 'Jimmy6'},
                {key: 'Julie5'},
                {key: 'John4'},
                {key: 'Jillian3'},
                {key: 'Jimmy2'},
                {key: 'Julie1'},
            ]
        };
    }
    componentWillMount(){
    
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    renderItem(item){
        return (
            <Text style={styles.item}>{item.key}</Text>
        );
    }
        
    render() {
        // const { navigate } = this.props.navigation;
        
                    {/* renderItem={this.renderItem} */}
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    }
});