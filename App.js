import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
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

const HomeStack = StackNavigator({
    Home: { screen: HomeScreen },

    Arts: { screen: ArtsScreen },
    Views: { screen: ViewsScreen },
})

const Tabs = TabNavigator({
    Home: { screen: HomeStack },
    Signup: { screen: SignupScreen },
    // Location: { screen: LocationScreen },
    Profile: { screen: ProfileScreen },
    Login: { screen: LoginScreen },
    CameraRoll: { screen: CameraRoll },
    LocationList: { screen: LocationList },

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
    Eats: {
        screen: EatsStack, navigationOptions: {
            title: 'Eats',
        }
    }
})


export default class App extends Component {

    eatsNavigate(location) {
        this.props.navigation.navigate('LocationScreen', { location });
    }
    
    render() {
        return (
            <View>
                <RootNavigator
                />
                <EatsStack screenProps={() => this.eatsNavigate(location)} />
            </View>
        );
    }
}


