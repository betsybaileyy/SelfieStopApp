import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfilePhotos from './ProfilePhotos';
import * as userProfileService from './services/userProfile';
import * as userService from './services/user';
import ProfileCameraNav from '../components/profileCameraNav';
import HeaderBar from '../components/header';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            images: [],
            user: ''
        };
    }

    async componentDidMount() {
        try {
            const isLoggedIn = await userService.isLoggedIn();

            if (!isLoggedIn) {
                return;
            }
            const user = await userService.me();
            console.log(user);
            this.setState({
                user,
                loading: false
            });

        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }

    }

    render() {
        if (this.state.loading === true) {
            return <ActivityIndicator size="large" color="#0000ff" />
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <HeaderBar />
                    <View style={{ marginTop: 70 }}>
                        <View style={styles.profileContainer}>

                            <View style={styles.headerContainer}>

                                {<Image source={{ uri: this.state.user.image }}
                                    style={styles.profilePic} />}

                                <View style={styles.changeImage}>
                                    <ProfileCameraNav />
                                </View>
                                <View>
                                    <Text style={styles.fullName}>
                                        {this.state.user.firstName} {this.state.user.lastName}</Text>
                                </View>
                            </View>

                            <View style={styles.bioContainer}>
                                <View>
                                    <Text style={styles.bioText}>
                                        {this.state.user.bio}
                                    </Text>
                                </View>
                            </View>

                        </View>

                        <View style={styles.iconContainer}>
                            <Image source={require('../images/galleryicon.png')}
                                style={styles.galleryIcon} />
                        </View>


                        <ScrollView>
                            {<ProfilePhotos />}
                        </ScrollView>


                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    profilePic: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },

    profileContainer: {
        flexDirection: 'row',

    },

    headerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },

    userName: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20,
        // marginBottom: 10,
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
        paddingLeft: 10,
        paddingTop: 15,
    },

    bioText: {
        color: '#747d8c',
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    galleryIcon: {
        height: 20,
        width: 20,
    },

    changeImage: {
        position: 'absolute',
        top: 55,
        left: 18,
    },

})