import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,


} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import Carousel from '../components/carousel';
import RecentSelfies from '../components/recentSelfies';
import LocationCards from '../components/locationCards';
import * as imageService from '../components/services/images';
import * as locationsService from '../components/services/locations';
import { withNavigation } from 'react-navigation';
import HeaderBar from '../components/header';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
        };

    }

    static navigationOptions = { header: null };

    async componentDidMount() {
        this.getLocations();
    }

    async getLocations() {
        try {
            const locations = await locationsService.allLocations();

            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
    }

    navigate() {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return (

            <View style={{ flex: 1 }}>
                <View>
                    <HeaderBar navigate={this.props.navigation.navigate} />
                </View>
                <ScrollView
                    style={{ marginTop: 55 }}
                    ref={(c) => { this.parentScrollView = c; }} >
                    <View
                        style={{ borderColor: '#423e3c', borderWidth: 2 }}
                    >
                        <Carousel navigate={this.props.navigation.navigate} />
                    </View>
                    <View
                        style={{ borderColor: '#423e3c', borderWidth: 8 }}
                    >
                        <RecentSelfies />
                    </View>
                    <LocationCards navigate={this.props.navigation.navigate} />
                </ScrollView>
            </View>

        );
    }
}





