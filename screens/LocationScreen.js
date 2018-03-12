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
        console.log(this.props.navigation.state.params.location)
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
        console.log(this.props.navigation.state.params.location);
        console.log(this.props.navigation);
        console.log(this.props.location);
        return (
            <View>
                <View>
                    <RkCard>
                        <Image rkCardImg style={styles.img} source={{ uri: this.props.navigation.state.params.location.image }} />
                        <View rkCardContent>
                            <Text style={styles.headerText}>{this.props.navigation.state.params.location.name}</Text>
                            <Text style={styles.descriptionText}>{this.props.navigation.state.params.location.description}</Text>
                            <Text style={styles.addressText}>{this.props.navigation.state.params.location.address}</Text>
                        </View>
                    </RkCard>
                </View>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    img: {
        height: 200,
    },
    headerText: {
        fontSize: 13,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        paddingBottom: 3,
    },
    descriptionText: {
        fontSize: 12,
    },
    addressText: {
        fontSize: 12,
        fontStyle: 'italic',
        paddingTop: 5,
    },
})
