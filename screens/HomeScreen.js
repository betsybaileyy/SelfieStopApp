import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,

} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import SignupScreen from './SignupScreen';
import { MyCarousel } from '../components/carousel';
import RecentSelfies from '../components/recentSelfies';
import LocationCards from '../components/locationCards';
import CameraNav from '../components/cameraNav';
import * as imageService from '../components/services/images';






export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     password: '',
        //     bio: '',
        //     image: ''
        // }
    }

    componentDidUpdate() {
        let filePath = this.props.navigation.state.params.image
        console.log(filePath);
        const data = new FormData();
        data.append('image', {
            uri: filePath,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        console.log(data);
        fetch('https://uvifeqeqvt.localtunnel.me/api/images', {
            method: 'POST',
            body: data,
        }).then( res => {
            console.log(res)
        }).catch( (err) => {
            console.log(err)
        });

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    ref={(c) => { this.parentScrollView = c; }}
                >
                    <MyCarousel />
                    <RecentSelfies />
                    <LocationCards navigate={this.props.navigation.navigate} />
                </ScrollView>
                <CameraNav />
            </View>
        );
    }
}





