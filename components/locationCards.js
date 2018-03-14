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

            <View style={{ marginTop: 10, flexDirection: 'row',  justifyContent: 'center', }}>

                <TouchableOpacity onPress={() => { this.props.navigate('Arts') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Arts_Black.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Eats') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Eats_Black.jpg')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Views') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Views_Black.jpg')}
                    />
                </TouchableOpacity>

            </View>

        )
    }
}








