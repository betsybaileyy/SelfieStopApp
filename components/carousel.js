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
import { withNavigation } from 'react-navigation';

import * as locationsService from './services/locations';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        }
    }

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

    // onPressImage() {
    //     this.props.navigation.navigate('LocationScreen', { location })
    // }

    navigate() {
        this.props.navigation.navigate('LocationScreen', { location });
    }


    render() {
        console.log(this.props.navigation);
        return (

            <View style={{ flex: 1 }}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>

                    <ScrollView horizontal={true} height={300}>
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard key={index}>
                                    <TouchableOpacity onPress={() => { this.props.navigate('LocationScreen', { location }) }} >
                                            <Text>{location.name}</Text>
                                        <Image rkCardImg source={{uri: location.image}} />
                                        <View rkCardContent>
                                            <Text>{location.description}</Text>
                                        </View>
                                            <Text>Footer</Text>
                                    </TouchableOpacity>
                                </RkCard>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
