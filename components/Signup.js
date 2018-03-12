import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import SignupForm from './SignupForm';


export default class Signup extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.signupContainer} behavior='padding'>

                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('../images/selfiestoplogo.png')} />

                </View>

                <View style={styles.formContainer}>

                    <SignupForm navigation={this.props.navigation} />

                </View>

            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    signupContainer: {
        backgroundColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 10,
        justifyContent: 'center',
    },
    logo: {
        height: 150,
        width: 300,
    }
})