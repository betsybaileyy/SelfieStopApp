import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as locationsService from '../components/services/locations';

export default class ArtsScreen extends Component {
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
            console.log('getting locations');
            console.log(Object.keys(locationsService));
            const locations = await locationsService.all(21);

            console.log(locations);
            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text> Absolutley Fantastic Places to Take Pictures of Yourself</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> Absolutley Fantastic Places to Take Pictures of Yourself</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                </View>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    <ScrollView>
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard>
                                    <View rkCardHeader>
                                        <Text>{location.name}</Text>
                                    </View>
                                    <Image rkCardImg source={location.image} />
                                    <View rkCardContent>
                                        <Text>{location.description}</Text>
                                    </View>
                                    <View rkCardFooter>
                                        <Text>Footer</Text>
                                    </View>
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
