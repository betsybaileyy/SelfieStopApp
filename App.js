import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import UITest from './screens/uiTest';
import LocationScreen from './screens/LocationScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';

const RootNavigator = TabNavigator({
    Home: { screen: UITest },
    Signup: { screen: SignupScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen }
}, {
        initialRouteName: 'Home'
    });



export default class App extends Component {
    render() {
        return (
            <RootNavigator />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
