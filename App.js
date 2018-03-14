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
import Carousel from './components/carousel';
import ProfileCameraRoll from './screens/profileCameraRoll';
import HeaderBar from './components/header';


const CarouselStack = StackNavigator({
    Carousel: { screen: Carousel },
    LocationScreen: { screen: LocationScreen },
});

const EatsStack = StackNavigator({
    Home: { screen: EatsScreen },
    LocationScreen: { screen: LocationScreen },
});

const ArtsStack = StackNavigator({
    Home: { screen: ArtsScreen },
    LocationScreen: { screen: LocationScreen },
});

const ViewsStack = StackNavigator({
    Home: { screen: ViewsScreen },
    LocationScreen: { screen: LocationScreen },
});

const HeaderStack = StackNavigator({
    LoginScreen: { screen: LoginScreen },
})

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },
    Header: { screen: HeaderStack },
    Carousel: { screen: CarouselStack },
    Eats: { screen: EatsStack },
    Arts: { screen: ArtsStack },
    Views: { screen: ViewsStack },
    ProfileCameraRoll: { screen: ProfileCameraRoll },
});

const Tabs = TabNavigator({
    Home: { screen: HomeStack },
    Signup: { screen: SignupScreen },
    CameraRoll: { screen: CameraRoll },
    Profile: { screen: ProfileScreen },
    Login: { screen: LoginScreen },


},

    {
        ...TabNavigator.Presets.iOSBottomTabs, // or iOSBottomTabs
        // Defining options as usual
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            activeBackgroundColor: '#81ecec',
            inactiveBackgroundColor: '#bdbdbd',

          },

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


