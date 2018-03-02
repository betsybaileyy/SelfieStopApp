import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfilePhotos from './ProfilePhotos';

export default class ProfileCard extends Component {
    render() {
        return (
            <View>
                <Text style={styles.header}>Profile</Text>

                <View style={styles.headerContainer}>
                    <Image source={require('../images/selfie4.jpg')}
                        style={styles.profilePic} />
                    <Text style={styles.userName}>Harambe</Text>
                </View>
                <Text style={styles.bioHeader}>About me</Text>
                <View style={styles.bioContainer}>
                    <Text style={styles.bioText}>I like bananas and climbing trees. I sometimes like to pick bugs out of my friends hair.</Text>
                </View>
                <Text style={styles.photoHeader}>My Photos</Text>
                <View>
                    <ScrollView>
                        <ProfilePhotos />
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    profilePic: {
        height: 150,
        width: 150,
    },

    headerContainer: {
        alignItems: 'center',
        flexGrow: 10,
        justifyContent: 'center',
        backgroundColor: '#f5f6fa',


    },

    header: {
        textAlign: 'center',
        color: '#747d8c',
        fontSize: 20,
        paddingTop: 10,
        backgroundColor: '#353b48',

    },

    userName: {
        fontSize: 20,
        textAlign: 'center',
        color: '#353b48',
    }

    ,
    bioHeader: {
        textAlign: 'center',
        color: '#353b48',
    },

    bioText: {
        textAlign: 'center',
        color: '#747d8c',
    },
    photoHeader: {
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#353b48',
        color: '#dfe6e9',
    },


})