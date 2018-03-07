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

export const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Eats: { screen: EatsScreen, navigationOptions: {
        title: 'Eats',
    } },
    Arts: { screen: ArtsScreen },
    Views: { screen: ViewsScreen },
    Location: { screen: LocationScreen }
})

// export const EatsStack = StackNavigator({
//     Location: { screen: LocationScreen }
// });

const RootNavigator = TabNavigator({
    Home: { screen: HomeStack },
    Signup: { screen: SignupScreen },
    Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
    Login: { screen: LoginScreen },
    Camera: { screen: CameraScreen },

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


