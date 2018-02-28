import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
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

                    <LoginForm />

                </View>
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