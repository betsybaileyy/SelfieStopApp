import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import ProfilePhotos from './ProfilePhotos';
import * as userService from './services/userProfile';
import ProfileCameraNav from '../components/profileCameraNav';


export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            user: ''
        };
    }

    async componentDidMount() {

        this.one();
    }

    async one() {
        try {
            const user = await userService.one(1);
            console.log(user);
            this.setState({
                user
            });
        } catch (err) {
            console.log(err);
        }
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7117c3fe898f1a8fb25b2a873a57d5ec6c099941
    // updatePhoto() {


    //     try {
    //         await userService.update(this.state.user.id, data);
    //         console.log('Updated on front-end');
    //     } catch (err) {
    //         if (err.message) {
    //             this.setState({ feedbackMessage: err.message });
    //         }
    //         console.log(err);
    //     }
<<<<<<< HEAD
    // }

=======
    // }
=======
    // componentDidUpdate() {
    //     let filePath = this.props.navigation.state.params.image
    //     console.log(filePath);
    //     const data = new FormData();
    //     data.append('image', {
    //         uri: filePath,
    //         type: 'image/jpeg',
    //         name: 'testPhotoName'
    //     })
    //     console.log(data);
    //      userService.update(this.state.user.id, data);
    //      console.log('Updated on front-end');

    // }

>>>>>>> 413110ca62ede61469f30cd8b8d1654a8e9242f4




>>>>>>> 7117c3fe898f1a8fb25b2a873a57d5ec6c099941
    render() {
        return (
            <View>
                <Text style={styles.userName}>{this.state.user.firstName} {this.state.user.lastName} </Text>

                <View style={styles.profileContainer}>

                    <View style={styles.headerContainer}>

                        {<Image source={{ uri: this.state.user.image }}
                            style={styles.profilePic} />}
                        <ProfileCameraNav />
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


                <View>
                    <ScrollView>
                        {<ProfilePhotos />}
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
        paddingLeft: 20,
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
        paddingLeft: 25,
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