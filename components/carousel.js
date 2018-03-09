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
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';
import * as locationService from './services/locations';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            dC: []
        }
    }

    async componentDidMount() {
        try {
            const locations = await locationService.allLocations()
            this.setState({ locations }); //this.state.locations
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
        console.log(this.state.locations);
    }

    // async getLocations() {
    //     try {
    //         const locations = await locationsService.allLocations();

    //         console.log(locations);
    //         this.setState({
    //             locations
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


    render() {
        // const { navigate } = this.props.navigation;
        console.log(this.props.navigation);
        const dataCarousel = this.state.locations.map((location, index) => {
            return {
                index: location.index,
                title: location.name,
                imagePath: location.image
            }
        });

        console.log(dataCarousel);


        return (
            <View>
                <TouchableOpacity onPress={() => {
                    // this.setState({ location: dataCarousel });
                    console.log(this.props.navigation);

                    this.props.navigation.navigate('LocationScreen',
                        { location })
                }} >
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
                    <Text> Click Me! </Text>
                </TouchableOpacity>
            </View>
        );
    }
}