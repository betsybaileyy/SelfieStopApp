import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
    
    static navigationOptions = { header: null };

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                <View style={styles.logoContainer}>

                    <Image
                        style={styles.logo}
                        source={require('../images/selfiestoplogo.png')} />

                </View>


                <View style={styles.formContainer}>

                    <LoginForm navigation={this.props.navigation} />

                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 10,
        justifyContent: 'center',
    },
    logo: {
        height: 220,
        width: 320,
    }
})