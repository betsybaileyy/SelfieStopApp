import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('../images/selfiestoplogo.png')} />

                </View>
                <View style={styles.formContainer}>
                </View>
                <LoginForm />
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 10,
        justifyContent: 'center',
    },
})