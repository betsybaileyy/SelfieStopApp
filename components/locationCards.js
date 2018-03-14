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
// import LocationsScreen from '../../screens/locationsscreen';

export default class LocationCards extends Component {

    navigate(category) {
        this.props.navigation.navigate('LocationScreen', { location });
    }

    render() {
        return (

            <View style={{ flexDirection: 'row',  justifyContent: 'center', backgroundColor: '#423e3c' }}>

                <TouchableOpacity onPress={() => { this.props.navigate('Arts') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Arts_Black.jpg')}
                    />
                    {/* <Text style={{ marginHorizontal: 55 }}>Arts</Text> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Eats') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Eats_Black.jpg')}
                    />
                    {/* <Text style={{ marginHorizontal: 55 }}>Eats</Text> */}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Views') }} >
                    <Image
                        style={{ height: 250, marginHorizontal: 10 }}
                        source={require('../images/Views_Black.jpg')}
                    />
                    {/* <Text style={{ marginHorizontal: 55 }}>Views</Text> */}
                </TouchableOpacity>

            </View>

        )
    }
}








