import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';

export default class ProfilePhotos extends Component {
    render() {
        return (


            <View style={styles.photoContainer}>
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal}
                    transparent={false} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana1.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana2.jpeg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana3.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
                <RkModalImg source={require('../images/banana4.jpg')}
                    style={styles.photoItems}
                    modalImgStyle={styles.modalImg}
                    modalStyle={styles.modal} />
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

