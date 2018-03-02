import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfilePhotos from './ProfilePhotos';

export default class ProfileCard extends Component {
    render() {
        return (
            <View>
                <Text style={styles.userName}>Bananas615</Text>



                <View style={styles.profileContainer}>

                    <View style={styles.headerContainer}>

                        <Image source={require('../images/selfie4.jpg')}
                            style={styles.profilePic} />

                        <Text style={styles.fullName}>Harambe Smith</Text>

                    </View>

                    <View style={styles.bioContainer}>
                        <Text style={styles.bioText}>I like bananas and climbing trees. I sometimes like to pick bugs out of my friends hair. Did I mention that I like bananas and climbing trees?</Text>
                    </View>

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
        height: 100,
        width: 100,
        borderRadius: 50,
    },

    profileContainer: {
        flexDirection: 'row',

    },

    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    userName: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 10,
        color: 'black',

    },

    fullName: {
        fontSize: 15,
        color: '#353b48',
        paddingLeft: 10,
    },
    bioContainer: {
        flexWrap: 'wrap',
        paddingRight: 100,
        paddingTop: 15,
    },

    bioText: {
        color: '#747d8c',
    },
    photoHeader: {
        marginTop: 40,
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: '#dfe6e9',
        color: 'black',
    },


})