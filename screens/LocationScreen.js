import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as getLocationService from '../components/services/locations';

export default class LocationScreen extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     location
        // };
    }

    static navigationOptions = { header: null };

    componentDidMount() {
        this.getLocation();
        // console.log(this.props.navigation.state.params.location)
    }


    getLocation() {
        getLocationService.one(41)
            .then((location) => {
                this.setState({
                    location
                });
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        // console.log(this.props.navigation.state.params.location);
        console.log(this.props.navigation);
        console.log(this.props.location);
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>{this.props.navigation.state.params.location.name}</Text>
                        </View>
                        <Image rkCardImg source={{ uri: this.props.navigation.state.params.location.image }} />
                        <View rkCardContent>
                            <Text>{this.props.navigation.state.params.location.description}</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>{this.props.navigation.state.params.location.address}</Text>
                        </View>
                    </RkCard>
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