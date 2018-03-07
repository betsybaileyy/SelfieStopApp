import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';
import * as UserService from './services/userProfile';
export default class ProfilePhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selfies: [],
            userSelfies: ''
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
            this.setState({
                userSelfies
            });
        } catch (err) {
            console.log(err);
        }
    }





    render() {
        return (

            <View style={styles.photoContainer}>
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/bobdilly.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
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

        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImg: {
        height: 200,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

