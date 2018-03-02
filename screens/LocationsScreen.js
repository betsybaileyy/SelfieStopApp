import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as getLocationsService from '../components/services/locations';

export default class LocationsScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        };
    }

    getLocations() {
       getLocaionsService.all()
            .then((images) => {
                this.setState({
                    images: images
                });
            }).catch((err) => {
                console.log(err);
            });
    }
    

    // getImages(api call here){
    //     render
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                </View>
                <View style={{ flex: 1, justifyContent: 'center',
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
