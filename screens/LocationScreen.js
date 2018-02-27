import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';

export default class LocationScreen extends Component {
    render() {
        return (
            <View>
                <Text>Location</Text>
                <RkButton
                    title="Location"
                    onPress={() => this.props.navigation.navigate('Signup')}
                />
            </View>
        )
    }

}