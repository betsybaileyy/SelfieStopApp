import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, AppRegistry } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as locationsService from '../components/services/locations';
import { withNavigation, StackNavigator} from 'react-navigation';
import LocationList from '../components/locationList';

const EatsStack = StackNavigator({
    // Home: { screen: EatsScreen },
    LocationList: { screen: LocationList }
});

export default class EatsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
        };
    } 

    componentDidMount() {
        this.getLocations();
    }

    async getLocations() {
        try {
            const locations = await locationsService.all(1);

            console.log(locations);
            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        console.log(this.props.navigation);
        return (
            <ScrollView>
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> Absolutley Fantastic Places to Take Pictures of Yourself</Text>
                        </View>
                    </RkCard>
                </View>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <LocationList navigate={this.props.navigation.navigate} />
                </View>
                </View>
            </ScrollView>
           
        )
    }
}

// var styles = StyleSheet.create({
//     list: {
//         justifyContent: 'center',
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
//     item: {
//         backgroundColor: '#CCC',
//         margin: 10,
//         width: 100,
//         height: 100
//     }
// });

// AppRegistry.registerComponent('SelfieStopApp', () => EatsScreen);