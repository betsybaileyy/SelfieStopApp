import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';
import * as UserService from './services/userProfile';
export default class ProfilePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selfies: [],
            userSelfies: []
        };
    }

    async componentDidMount() {
        console.log('did mount');
        this.all();
    }

    async all() {
        try {
            const userSelfies = await UserService.all(1);
            console.log(userSelfies);
            console.log(userSelfies[0])
            this.setState({
                userSelfies
            });
        } catch (err) {
            console.log(err);
        }
        console.log(this.state)
    }

    render() {
        return (

            <View style={styles.photoContainer}>
                {this.state.userSelfies.map((image, index) => {
                    return (
                        <RkModalImg source={{ uri: image.image }}
                            style={styles.photoItems}
                            modalImgStyle={styles.modalImg}
                            modalStyle={styles.modal}
                            transparent={false} />
                    )
                })}

            </View>



        )

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
        // margin: 40,
    },

})

