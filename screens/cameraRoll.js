import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CameraRollPicker from 'react-native-camera-roll-picker';
import * as imageService from '../components/services/images';


export default class CameraRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
        imageProps = this.props;
    }

    getSelectedImages(images) {

        let imagePath = images[0].uri
        const profileData = new FormData();
        profileData.append('image', {
            uri: imagePath,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        imageService.insert(profileData)


        Alert.alert(
            'Congratulations!',
            'Image upload successful...',
            [
                {
                    text: 'OK', onPress: () =>
                        imageProps.navigation.navigate('Home'),
                },
            ],
            { cancelable: false }
        )

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