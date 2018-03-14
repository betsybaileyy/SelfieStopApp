import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
import * as userService from './services/user';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'bob@dylan.com',
            password: 'password123',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    static navigationOptions = { header: null };


    handleEmailChange(text) {
        this.setState({ email: text });
    }

    handlePasswordChange(text) {
        this.setState({ password: text });
    }

    async componentDidMount() {
        try {
            await userService.checkLogin();
            if (true) {

                console.log('Hello Alex');
            }
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }

    }

    async login() {
        try {
            await userService.login(this.state.email, this.state.password);
            this.setState({ checkingLogin: true });
            this.props.navigation.navigate('Home');

        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
    }

    render() {
        return (

            <View style={styles.container}>

                <TextInput
                    placeholder='email'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handleEmailChange(text)}
                    style={styles.input}
                    autoCorrect={false}
                    returnKeyType='next'
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    value={this.state.email}
                />

                <TextInput
                    placeholder='password'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handlePasswordChange(text)}
                    style={styles.input}
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input}
                    underlineColorAndroid='transparent'
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.login()}
                >
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#a4b0be',
        color: '#f5f6fa'
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: '#81ecec',
        borderRadius: 50
    },
    buttonText: {
        textAlign: 'center',
        color: '#f5f6fa',

    }


})