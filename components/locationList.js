import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as locationsService from '../components/services/locations';
import { withNavigation, StackNavigator} from 'react-navigation';
import { LocationScreen } from '../screens/LocationScreen';

export default class LocationList extends Component {
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
     
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <ScrollView >
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard key={index} >
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')} >
                                        <View rkCardHeader>
                                            <Text>{location.name}</Text>
                                        </View>
                                        {/* source={location.image} */}
                                        <Image rkCardImg />
                                        <View rkCardContent>
                                            <Text>{location.description}</Text>
                                        </View>
                                        <View rkCardFooter>
                                            <Text>Footer</Text>
                                        </View>
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

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});
