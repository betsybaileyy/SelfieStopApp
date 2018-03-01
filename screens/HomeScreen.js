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
import SelfieCard from '../components/selfieCard';
import LocationCards from '../components/locationCards';
import CameraNav from '../components/cameraNav';

export default class HomeScreen extends Component {

    render() {
        return (



            <View>
            <ScrollView
                ref={(c) => { this.parentScrollView = c; }}
            >
                <MyCarousel />
                <SelfieCard />
                <LocationCards />
            </ScrollView>
            <CameraNav />
            </View>
        );
    }
}





