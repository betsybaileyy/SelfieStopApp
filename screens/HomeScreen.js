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
import SignupScreen from './SignupScreen';
import Carousel from '../components/carousel';
import RecentSelfies from '../components/recentSelfies';
import LocationCards from '../components/locationCards';
import CameraNav from '../components/cameraNav';
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

            console.log(locations);
            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
        console.log(this.state.locations);
    }

    // getLocations() {
    //     LocationsService.allLocations()
    //          .then((location) => {
    //              this.setState({
    //                  location
    //              });
    //          }).catch((err) => {
    //              console.log(err);
    //          });
    //  }

    async navigate(category) {
        this.props.navigation.navigate('LocationScreen', { location });
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
            <View>
                <HeaderBar />
            </View>
                <View
                    style={{ marginTop: 55 }}
                    ref={(c) => { this.parentScrollView = c; }} >
                    <Carousel navigate={this.props.navigation.navigate} />
                    <RecentSelfies />
                    <LocationCards navigate={this.props.navigation.navigate} />
                </View>
                {/* <CameraNav /> */}
            </View>

        );
    }
}





