import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import CameraScreen from './screens/CameraScreen';
import LocationScreen from './screens/LocationScreen';
import ArtsScreen from './screens/ArtsScreen';
import ViewsScreen from './screens/ViewsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignupScreen from './screens/SignupScreen';
import EatsScreen from './screens/EatsScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CameraRoll from './screens/cameraRoll';


export const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Eats: { screen: EatsScreen },
    Arts: { screen: ArtsScreen },
    Views: { screen: ViewsScreen }
})

 const RootNavigator = TabNavigator({
    Home: { screen: HomeScreen },
    Signup: { screen: SignupScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
    Login: { screen: LoginScreen },
    CameraRoll: {screen: CameraRoll },

},
{
    ...TabNavigator.Presets.iOSBottomTabs, // or iOSBottomTabs
    // Defining options as usual
    tabBarPosition: 'bottom',

},
{
        initialRouteName: 'Home'
    });



export default class App extends Component {
    render() {
        return (
            <RootNavigator
            />
        );
    }
}


