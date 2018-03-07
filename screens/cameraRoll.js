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

    getSelectedImages(images) {

        let imagePath = images[0].uri
        console.log(imagePath);
        this.props.navigation.navigate(this.props.navigation.state.params.key, {
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