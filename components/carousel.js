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
import { RkButton, RkCard, RkTheme, RkText, RkCardContainer } from 'react-native-ui-kitten';
import { withNavigation } from 'react-navigation';
import * as locationsService from './services/locations';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        }
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

                    <ScrollView horizontal={true} height={225} >
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard key={index} width={400}>
                                    <TouchableOpacity onPress={() => { this.props.navigate('LocationScreen', { location }) }} >
                                        <View rkCardImgOverlay>
                                            <Text style={styles.overlayText}>  {location.name}</Text>
                                        </View>
                                        <Image rkCardImg source={{ uri: location.image }} />
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

RkTheme.setType('RkCard', 'shadowed', {
    img: {
        height: 200,
    },
    content: {
        alignSelf: 'center',
    },
    imgOverlay: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const styles = StyleSheet.create({
    overlayText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 30,
        fontFamily: 'Cochin',
    },
})
