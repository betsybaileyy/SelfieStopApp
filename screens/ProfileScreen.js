import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import Profile from '../components/Profile'

export default class ProfileScreen extends Component {
    render() {
        return (
            <Profile />
        )
    }
}