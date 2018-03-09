import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import * as locationService from './services/locations';

export class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        }
    }

    async componentDidMount() {
        try {
            const locations = await locationService.allLocations()
            this.setState({ locations });
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
        console.log(this.state.locations);
    }


    render() {
        const dataCarousel = this.state.locations.map((location, id) => {
            return {
                id: location.id,
                title: location.name,
                imagePath: location.image
            }
        });

        return (
            <SwipeableParallaxCarousel
                data={
                    dataCarousel
                }
                titleColor={'white'}
                navigation={'true'}
                navigationType={'dots'}
                height={300}
                align={'center'}
            />
        );
    }
}