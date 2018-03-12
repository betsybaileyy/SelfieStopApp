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
            locationid: ''

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
    }

    getSelectedImages(images) {
        let locationValue = this.state.locationid;
        console.log(locationValue);
        let imagePath = images[0].uri
        const profileData = new FormData();
        profileData.append('locationid', locationValue);
        profileData.append('image', {
            uri: imagePath,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        console.log(profileData);
        // imageService.insert(profileData);


        // Alert.alert(
        //     'Congratulations!',
        //     'Image upload successful...',
        //     [
        //         {
        //             text: 'OK', onPress: () =>
        //                 imageProps.navigation.navigate('Home'),
        //         },
        //     ],
        //     { cancelable: false }
        // )

    }

    locationChange(locationid) {
        this.setState({ locationid });
        console.log(this.state.locationid);
    }

    render() {



        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.container}>
                    {/* <RkChoiceGroup
                        selectedIndex={1} radio
                    > */}
                    {this.state.locations.map((location, id) => {
                        let index = location.id
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.buttonContainer}
                                onPress={(index) => this.locationChange(location.id)}
                            >
                                {/* <RkChoice
                                        rkType='radio'
                                    /> */}
                                <Text style={styles.buttonText}>{location.name}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    {/* </RkChoiceGroup> */}
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

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
    buttonContainer: {
        marginBottom: 20,
        paddingVertical: 15,
        backgroundColor: '#a4b0be',
        borderRadius: 50
    },
    buttonText: {
        textAlign: 'center',
        color: '#f5f6fa',

    }


})