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

export default class LocationCards extends Component {

    navigate(category) {
        this.props.navigation.navigate('LocationScreen', { location });
    }

    render() {
        return (

            <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: '#423e3c' }}>

                <TouchableOpacity onPress={() => { this.props.navigate('Arts') }} >
                    <Image
                        style={{ borderRadius: 10, height: 208, marginHorizontal: 10 }}
                        source={require('../images/Arts_Blue.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Eats') }} >
                    <Image
                        style={{ borderRadius: 10, height: 210, marginHorizontal: 10 }}
                        source={require('../images/Eats_Blue.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Views') }} >
                    <Image
                        style={{ borderRadius: 10, height: 208, marginHorizontal: 10 }}
                        source={require('../images/Views_Blue.jpg')}
                    />
                </TouchableOpacity>

            </View>

        )
    }
}








