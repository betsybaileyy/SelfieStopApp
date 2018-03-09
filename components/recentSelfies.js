import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import SelfieCard from './selfieCard';
import * as imageService from './services/images';


export default class RecentSelfies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: []
        };
    }

    async componentDidMount() {
        try {
            let images = await imageService.all()
            this.setState({ images });
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
    }

    render() {
        const selfies = this.state.images.map((selfie, index) => {
            return (
                <SelfieCard key={index} selfie={selfie} />
            );
        });

        return (

            <View>
                <View style={{ flexDirection: 'row', height: 40, justifyContent: 'center', backgroundColor: '#ffcc66', }}>

                    <Text style={{ fontFamily: 'Cochin', fontSize: 20, fontWeight: 'bold', fontFamily: 'Cochin', }}>Recent Selfies</Text>
                </View>

                <ScrollView horizontal={true}>
                    {selfies}
                </ScrollView>
            </View>
        )
    }
}

