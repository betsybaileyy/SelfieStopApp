import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, } from 'react-native';
import * as newUserService from './services/newUser';
import CameraNav from '../components/cameraNav';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            bio: '',
            // image: ''
        }
    }

    handleFirstNameChange(text) {
        this.setState({ firstName: text });
    }

    handleLastNameChange(text) {
        this.setState({ lastName: text });
    }

    handleEmailChange(text) {
        this.setState({ email: text });
    }

    handlePasswordChange(text) {
        this.setState({ password: text });
    }

    handleBioChange(text) {
        this.setState({ bio: text });
    }

    async signUp(user) {
        try {
            console.log(user);
            await newUserService.insert(user);
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

                <Text style={styles.header}>Required Information</Text>

                <TextInput
                    placeholder='First Name'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handleFirstNameChange(text)}
                    style={styles.input}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handleLastNameChange(text)}
                    style={styles.input}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    placeholder='email'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handleEmailChange(text)}
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    placeholder='password'
                    placeholderTextColor='#f5f6fa'
                    onChangeText={(text) => this.handlePasswordChange(text)}
                    style={styles.input}
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType='go'
                    underlineColorAndroid='transparent'
                />

                <Text style={styles.header}>Additional Information</Text>

                <TextInput
                    placeholder='Bio'
                    placeholderTextColor='#747d8c'
                    onChangeText={(text) => this.handleBioChange(text)}
                    style={styles.inputBio}
                    autoCorrect={true}
                    underlineColorAndroid='transparent'
                />

                <CameraNav />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.signUp(this.state)}
                >
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#a4b0be',
        color: '#f5f6fa'
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: '#81ecec',
    },
    buttonText: {
        textAlign: 'center',
        color: '#f5f6fa',
    },
    header: {
        textAlign: 'center',
        color: '#747d8c'
    },
    inputBio: {
        height: 60,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#dfe4ea',
        color: '#747d8c'
    }


})


