import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as imageService from '../components/services/images';

export default class LocationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userImages: []
        };
    }

    static navigationOptions = { header: null };

    async componentDidMount() {
        this.getLocationImages(); // Sets the state
    }


    async getLocationImages() {
        try {
            const userImages = imageService.allImages(this.props.navigation.state.params.location.id)
            this.setState({
                userImages
            });
        } catch (err) {
            console.log(err);
        };
    }

    render() {
        console.log(this.props.navigation.state.params.location);
        console.log(this.props.navigation);
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
