import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CameraRollPicker from 'react-native-camera-roll-picker';
import * as imageService from '../components/services/images';
import * as locationService from '../components/services/locations';
import { RkButton, RkCard, RkTheme, RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten';


export default class CameraRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],

        };
        imageProps = this.props;
    }

    async componentDidMount() {
        try {
            const locations = await locationService.allLocations()
            this.setState({ locations }); //this.state.locations
        } catch (err) {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
            console.log(err);
        }
        console.log(this.state.locations);
    }

    getSelectedImages(images) {

        let imagePath = images[0].uri
        const profileData = new FormData();
        profileData.append('image', {
            uri: imagePath,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        imageService.insert(profileData)


        Alert.alert(
            'Congratulations!',
            'Image upload successful...',
            [
                {
                    text: 'OK', onPress: () =>
                        imageProps.navigation.navigate('Home'),
                },
            ],
            { cancelable: false }
        )

    }

    handleLocationChange(location) {
        console.log('test change');
    }

    render() {



        return (
            <View>
                <ScrollView>
                    <RkChoiceGroup
                        selectedIndex={1} radio
                    >
                        {this.state.locations.map((location, id) => {
                            return (
                                <TouchableOpacity onPress={(location) => this.handleLocationChange(location)} choiceTrigger >
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <RkChoice rkType='radio' />
                                        <Text>{location.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </RkChoiceGroup>
                </ScrollView>
                <ScrollView>
                    <CameraRollPicker
                        callback={this.getSelectedImages}
                        maximum={1}
                    />
                </ScrollView>

            </View>
        )
    }
}