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

            <View style={{ marginTop: 20, flexDirection: 'row', height: 120, justifyContent: 'center', }}>
                <TouchableOpacity onPress={() => { this.props.navigate('Eats') }} >
                    <Image
                        style={{ marginHorizontal: 20 }}
                        source={require('../images/icons/food.png')}
                    />
                    <Text style={{ marginHorizontal: 55 }}>Eats</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Arts') }} >
                    <Image
                        style={{ marginHorizontal: 20 }}
                        source={require('../images/icons/arts.png')}
                    />
                    <Text style={{ marginHorizontal: 55 }}>Arts</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigate('Views') }} >
                    <Image
                        style={{ marginHorizontal: 20 }}
                        source={require('../images/icons/views.png')}
                    />
                    <Text style={{ marginHorizontal: 55 }}>Views</Text>
                </TouchableOpacity>

            </View>

        )
    }
}








