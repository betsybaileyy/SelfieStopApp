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
import { withNavigation } from 'react-navigation';
import CameraRollPicker from 'react-native-camera-roll-picker';



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
        imageProps.navigation.navigate(imageProps.navigation.state.params.key, {
        image: imagePath
        });
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