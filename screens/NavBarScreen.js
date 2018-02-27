import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import { TabNavigator } from 'react-navigation';
import LocationScreen from './LocationScreen';
import LocationsScreen from './LocationsScreen';
import LoginScreen from './LoginScreen';
import ProfileScreen from './ProfileScreen';
import SignupScreen from './SignupScreen';



const TabNavigation = TabNavigator({
    Home: { screen: UITest },
    Signup: { screen: SignupScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
    Locations: { screen: LocationsScreen },
    Login: { screen: LoginScreen },
});

export default class NavBarScreen extends Component {

    static navigationOptions = ({ navigation }) => ({ title: "Test" })

    render() {
        return <TabNavigation />
    }
}