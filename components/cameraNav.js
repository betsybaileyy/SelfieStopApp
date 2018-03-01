import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';

class CameraNav extends Component {

    onPressButton() {
        //Alert.alert('You tapped the button!')
        this.props.navigation.navigate('Test');
    }

    render() {
        return (
            <View style={{ marginTop: 10, alignItems: 'center' }}>
                <RkButton
                    onPress={() => { this.onPressButton() }}
                >Take Selfie</RkButton>
            </View>
        );
    }
}

export default withNavigation(CameraNav);
