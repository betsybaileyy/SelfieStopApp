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

export default class CameraNav extends Component {
    render() {
        return(
            <View style={{marginTop: 10, alignItems: 'center'}}>
                <RkButton
                 onPress={() => {
                    Alert.alert('You tapped the button!');
                  }}
                >Take Selfie</RkButton>
            </View>
        );
    }
}