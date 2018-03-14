import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';
import * as UserService from './services/userProfile';
import PhotographerName from './photographerName';

export default class ProfilePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            selfies: [],
            userSelfies: []
        };
    }

    async componentDidMount() {

        this.all();
    }

    async all() {
        try {
            const userSelfies = await UserService.all(1);
            this.setState({
                userSelfies,
                loading: false
            });
        } catch (err) {
            console.log(err);
        }

    }

    deletePhoto(imageId) {
        Alert.alert(
            'Warning!',
            'Are you sure you want to delete this image?',
            [
                { text: 'OK', onPress: () => UserService.destroy(imageId) },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    _renderFooter(options) {
        return (
            <View style={styles.name}>
                <PhotographerName />
            </View>

        );
    }

    render() {
        if (this.state.loading === true) {
            return <ActivityIndicator size="large" color="#0000ff" />
        } else {
            return (
                <View style={styles.photoContainer}>
                    {this.state.userSelfies.map((image, index) => {
                        return (
                            <View key={index}>
                                <RkModalImg source={{ uri: image.image }}
                                    style={styles.photoItems}
                                    modalImgStyle={styles.modalImg}
                                    modalStyle={styles.modal}
                                    renderFooter={this._renderFooter}
                                />
                                <TouchableOpacity onPress={() => this.deletePhoto(image.id)}
                                    style={styles.changeImage}
                                >
                                    <Image
                                        style={{ marginHorizontal: 65, width: 20, height: 20 }}
                                        source={require('../images/icons/plusSign.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}

                </View>



            )
        }

    }
}

const styles = StyleSheet.create({

    photoContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },

    photoItems: {
        height: 80,
        width: 87,
        marginTop: 1,
        marginBottom: 1,
    },
    modal: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalImg: {
        height: 300,
        width: 400,
        marginTop: 200,
    },
    name: {
        alignItems: 'flex-end',
        paddingBottom: 150,
    },
    changeImage: {
        position: 'absolute',
        top: 1,
        left: 3,
    },
})


