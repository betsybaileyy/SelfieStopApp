import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';
import * as UserService from './services/userProfile';
import PhotographerName from './photographerName';
export default class ProfilePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                userSelfies
            });
        } catch (err) {
            console.log(err);
            console.log()
        }

    }

    _renderFooter(options) {
        return (
            <View style={styles.name}>
                <PhotographerName />
            </View>

        );
    }

    render() {

        return (
            <View style={styles.photoContainer}>

                {this.state.userSelfies.map((image, index) => {
                    return (
                        <RkModalImg key={index} source={{ uri: image.image }}
                            style={styles.photoItems}
                            modalImgStyle={styles.modalImg}
                            modalStyle={styles.modal}
                            renderFooter={this._renderFooter} />
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
        flex: 1,
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
    name: {
        alignItems: 'flex-end',
        paddingBottom: 150,
    },

})

