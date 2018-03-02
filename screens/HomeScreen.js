import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import SignupScreen from './SignupScreen';
import { MyCarousel } from '../components/carousel';
import RecentSelfies from '../components/recentSelfies';
import LocationCards from '../components/locationCards';
import CameraNav from '../components/cameraNav';

export default class HomeScreen extends Component {
    componentDidUpdate() {
        console.log('received image: ' + this.props.navigation.state.params.image);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    ref={(c) => { this.parentScrollView = c; }}
                >
                    <MyCarousel />
                    <RecentSelfies />
                    <LocationCards />
                </ScrollView>
                <CameraNav />
            </View>
        );
    }
}





