import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import SelfieCard from './selfieCard';
import * as imageService from './services/images';


export default class RecentSelfies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            images: []
        };
    }

    async componentDidMount() {
        try {
            let images = await imageService.all()
            this.setState({
                images,
                loading: false
            });
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
    }

    render() {
        if (this.state.loading === true) {
            return <ActivityIndicator size="large" color="#808080" />
        } else {
            const selfies = this.state.images.map((selfie, index) => {
                return (
                    <SelfieCard key={index} selfie={selfie} />
                );
            });

            return (

                <View style={{ backgroundColor: 'black' }}>
                    <ScrollView horizontal={true}>
                        {selfies}
                    </ScrollView>
                </View>
            )
        }
    }
}

