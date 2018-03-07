import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfilePhotos from './ProfilePhotos';
import * as UserService from './services/userProfile';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            user: ''
        };
    }

    async componentDidMount() {
        console.log('did mount');
        this.one();
    }

    async one() {
        try {
            const user = await UserService.one(1);
            console.log(user);
            this.setState({
                user
            });
        } catch (err) {
            console.log(err);
        }
    }




    render() {
        return (
            <View>
                <Text style={styles.userName}>{this.state.user.firstName} {this.state.user.lastName} </Text>

                <View style={styles.profileContainer}>

                    <View style={styles.headerContainer}>

                        {/* <Image source={image.user}
                            style={styles.profilePic} /> */}
                        <View>
                            <Text style={styles.fullName}>
                                {this.state.user.firstname} {this.state.user.lastname}</Text>
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
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,

    },
    galleryIcon: {
        height: 30,
        width: 30,
    },


})