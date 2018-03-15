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
                <View
                    style={{ marginTop: 60 }}
                    ref={(c) => { this.parentScrollView = c; }} >
                    <View style={{ backgroundColor: 'black' }}
                    >
                        <Carousel navigate={this.props.navigation.navigate} />
                    </View>
                    <View
                        style={{ borderColor: '#423e3c', borderWidth: 8 }}
                    >
                        {/* <View style={{ alignItems: 'center', backgroundColor: '#423e3c' }}>
                            <Text style={{ color: '#fff', backgroundColor: '#423e3c' }}>Featured Locations</Text>
                        </View> */}
                        <RecentSelfies />
                        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#423e3c' }}>
                            <Text style={{ paddingTop: 8, color: '#fff', backgroundColor: '#423e3c' }}>Recent Selfies</Text>
                        </View>
                    </View>
                    <LocationCards navigate={this.props.navigation.navigate} />
                </View>
            </View>

        );
    }
}





