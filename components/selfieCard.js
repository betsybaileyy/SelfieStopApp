import React from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg, } from 'react-native-ui-kitten';
export default function (props) {
    return (
        <RkModalImg source={{ uri: props.selfie.image }}
            style={styles.photoItems}
            modalImgStyle={styles.modalImg}
            modalStyle={styles.modal}
            transparent={false} />
    );
}



const styles = StyleSheet.create({

    photoItems: {
        height: 100,
        width: 100,
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

})
