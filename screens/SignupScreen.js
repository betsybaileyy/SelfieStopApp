import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import Signup from '../components/Signup';
export default class SignupScreen extends Component {
    render() {
        return (
            <Signup navigation={this.props.navigation} />
        )
    }
}