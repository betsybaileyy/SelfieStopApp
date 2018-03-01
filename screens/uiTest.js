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
import Camera from '../components/camera';


export default class UITest extends Component {

    render() {
        return (

            <Camera />


            // <ScrollView
            //     ref={(c) => { this.parentScrollView = c; }}
            // >
            //     <MyCarousel />
            //     <SelfieCard />
            //     <LocationCards />

            // </ScrollView>
        )
    }
}





