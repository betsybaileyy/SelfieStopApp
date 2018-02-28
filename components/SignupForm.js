import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, } from 'react-native';

export default class SignupForm extends Component {
    render() {
        return (

            <View style={styles.container}>


                <TextInput
                    placeholder='First Name'
                    placeholderTextColor='#f5f6fa'
                    style={styles.input}
                    autoCorrect={false}
                />

                <TextInput
                    placeholder='Last Name'
                    placeholderTextColor='#f5f6fa'
                    style={styles.input}
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    placeholder='email'
                    placeholderTextColor='#f5f6fa'
                    style={styles.input}
                    autoCorrect={false}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                />

                <TextInput
                    placeholder='password'
                    placeholderTextColor='#f5f6fa'
                    style={styles.input}
                    secureTextEntry
                    autoCorrect={false}
                    returnKeyType='go'
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={styles.buttonContainer}>
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
    }


})