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

    static navigationOptions = { header: null};

    componentDidMount() {
        this.getLocation();
        console.log(this.props.navigation.state.params.location)
    }

    // async getLocation() {
    //     try {
    //         const location = await getLocationService.one(41);

    //         console.log(location);
    //         this.setState({
    //             location
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }


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
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>{this.props.navigation.state.params.location.name}</Text>
                        </View>
                        <Image rkCardImg source={{uri: this.props.navigation.state.params.location.image}} />
                        <View rkCardContent>
                            <Text>{this.props.navigation.state.params.location.description}</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>{location.address}</Text>
                        </View>
                    </RkCard>
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
                <ScrollView>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={this.state.images} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>

                </ScrollView>
                </View> */}
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