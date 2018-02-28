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

export default class LocationCards extends Component {

    render() {
        return (

            <View style={{ marginTop: 20, flexDirection: 'row', height: 100, justifyContent: 'center', }}>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                        style={{ marginHorizontal: 20 }}
                        source={require('../images/icons/food.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                        style={{ marginHorizontal: 10 }}
                        source={require('../images/icons/arts.png')}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={this._onPressButton}>
                    <Image
                        style={{ marginHorizontal: 20 }}
                        source={require('../images/icons/views.png')}
                    />
                </TouchableOpacity>

            </View>


        )
    }
}









