import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, AppRegistry, TouchableOpacity } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as locationsService from '../components/services/locations';

export default class EatsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
        };
    } 

    static navigationOptions = { header: null };

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
                     <ScrollView >
                        {this.state.locations.map((location, index) => {
                            return (
                                <RkCard key={index} >
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationScreen', { location }) }} >
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
