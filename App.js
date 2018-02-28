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
import LocationsScreen from './screens/LocationsScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const RootNavigator = TabNavigator({
    Home: { screen: HomeScreen },
    Signup: { screen: SignupScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
    Locations: { screen: LocationsScreen },
    Login: { screen: LoginScreen },
    Test: { screen: UITest },

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


