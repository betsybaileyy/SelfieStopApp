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

    // }


    // }

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






    render() {
        return (
            <View>
                <Text style={styles.userName}>{this.state.user.firstName} {this.state.user.lastName} </Text>

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

    changeImage: {
        position: 'absolute',
        top: 60,
        left: 35,
    },

})