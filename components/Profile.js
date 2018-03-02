import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfileCard from './ProfileCard';

export default class Profile extends Component {
    render() {
        return (
            <View>
                <ProfileCard />
            </View>
        )
    }
}