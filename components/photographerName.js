import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as userService from './services/userProfile';

export default class PhotographerName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            user: ''
        };
    }

    async componentDidMount() {

        this.one();
    }

    async one() {
        try {
            const user = await userService.one(1);
            console.log(user);
            this.setState({
                user
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <Text style={styles.name}>{this.state.user.firstName} {this.state.user.lastName}</Text>
        )
    }
}

const styles = StyleSheet.create({
    name: {
        color: 'white',
        fontSize: 25,
        fontStyle: 'italic',
        backgroundColor: 'black',
    },
})