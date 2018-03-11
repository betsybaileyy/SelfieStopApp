import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';


class ProfileCameraNav extends Component {

    onPressButton() {
        console.log(this.props)
        //Alert.alert('You tapped the button!')
        // this.props.navigation.navigate('ProfileCameraRoll');
        this.props.navigation.navigate('ProfileCameraRoll', { ...this.props.navigation.key });
    }

    render() {
        return (
            <View style={{ marginTop: 10, alignItems: 'center' }}>
               <TouchableOpacity onPress={() => { this.onPressButton() }}>
                    <Image
                        style={{ marginHorizontal: 65 }}
                        source={require('../images/camera/openCamera.png')}
                    />
                    <Text style={{ marginHorizontal: 55 }}>Take Selfie</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

export default withNavigation(ProfileCameraNav);




