import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CameraScreen from './screens/CameraScreen';
import ArtsScreen from './screens/ArtsScreen';
import ViewsScreen from './screens/ViewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';
import EatsScreen from './screens/EatsScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CameraRoll from './screens/cameraRoll';
import LocationScreen from './screens/LocationScreen';

const EatsStack = StackNavigator({
    Home: { screen: EatsScreen },
    LocationScreen: { screen: LocationScreen },
});

const ArtsStack = StackNavigator({
    Home: { screen: ArtsScreen },
    LocationScreen: { screen: LocationScreen },
})

const ViewsStack = StackNavigator({
    Home: { screen: ViewsScreen },
    LocationScreen: { screen: LocationScreen },
})

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Eats: { screen: EatsStack },
    Arts: { screen: ArtsStack },
    Views: { screen: ViewsStack },
})

const Tabs = TabNavigator({
    Home: { screen: HomeStack },
    Signup: { screen: SignupScreen },
    Profile: { screen: ProfileScreen },
    Login: { screen: LoginScreen },
    CameraRoll: { screen: CameraRoll },
},

    {
        ...TabNavigator.Presets.iOSBottomTabs, // or iOSBottomTabs
        // Defining options as usual
        tabBarPosition: 'bottom',

    },
    {
        initialRouteName: 'Home'
    });

const RootNavigator = StackNavigator({
    Tabs: { screen: Tabs },
})


export default class App extends Component {

    render() {
        return (
                <RootNavigator
                />
        );
    }
}


