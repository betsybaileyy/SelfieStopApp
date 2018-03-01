import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';

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

                <View style={styles.photoContainer}>
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana1.jpg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana2.jpeg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana3.jpg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana4.jpg')} />

                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana1.jpg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana2.jpeg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana3.jpg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana4.jpg')} />
                    <Image
                        style={styles.photoItems}
                        source={require('../images/banana1.jpg')} />
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

    photoContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'

    },

    photoItems: {
        height: 100,
        width: 100,
    },



})