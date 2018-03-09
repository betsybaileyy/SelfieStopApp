import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { withNavigation, NavigationActions } from 'react-navigation';
import CameraRollPicker from 'react-native-camera-roll-picker';
import * as userProfileService from '../components/services/userProfile';


export default class ProfileCameraRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
        profileProps = this.props;
    }

    getSelectedImages(images) {

        let imagePath = images[0].uri
        console.log(imagePath);
        const profileData = new FormData();
        profileData.append('image', {
            uri: imagePath,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        console.log(profileData)
        userProfileService.update(profileData)
        profileProps.navigation.navigate('Profile')

    }




    render() {
        return (
            <ScrollView>
                <CameraRollPicker
                    callback={this.getSelectedImages}
                    maximum={1}
                     />
            </ScrollView>
        )
    }
}