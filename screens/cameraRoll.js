import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    Picker
} from 'react-native';
import { withNavigation } from 'react-navigation';
import CameraRollPicker from 'react-native-camera-roll-picker';
import * as imageService from '../components/services/images';
import * as locationService from '../components/services/locations';
import { RkButton, RkCard, RkTheme, RkText, RkChoice, RkChoiceGroup } from 'react-native-ui-kitten';
import Header from '../components/header';


export default class CameraRoll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            locationid: '',
            imagePath: ''

        };
        imageProps = this.props;
        let imageState;
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

    componentDidUpdate() {
        imageState = this;
    }

    getSelectedImages(images) {
        let imagePath = images[0].uri
        imageState.setState({ imagePath });
    }

    locationChange(locationid) {
        this.setState({ locationid });
        console.log(locationid)
    }

    submitPost() {
        let locationValue = this.state.locationid;
        let imageLocation = this.state.imagePath;
        const profileData = new FormData();
        profileData.append('locationid', locationValue);
        profileData.append('image', {
            uri: imageLocation,
            type: 'image/jpeg',
            name: 'testPhotoName'
        })
        console.log(profileData);
        imageService.insert(profileData);
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
    render() {



        return (
            <View style={{ flex: 1 }}>
                {/* <Header /> */}
                <ScrollView>
                    <CameraRollPicker
                        callback={this.getSelectedImages}
                        maximum={1}
                    />
                </ScrollView>
                <ScrollView style={styles.container}>
                    <Text>Choose Location</Text>
                    <View style={{ borderRadius: 10, borderColor: '#000', borderWidth: 2, marginBottom: 60 }}>
                        <Picker
                            selectedValue={this.state.location}
                            onValueChange={(itemValue) => this.locationChange(itemValue)}>
                            {this.state.locations.map((location, id) => {
                                let index = location.id
                                return (
                                    <Picker.Item key={index} label={location.name} value={location.id} />
                                    // <TouchableOpacity
                                    //     key={index}
                                    //     style={styles.buttonContainer}
                                    //     onPress={(index) => this.locationChange(location.id)}
                                    // >
                                    //     <Text style={styles.buttonText}>{location.name}</Text>
                                    // </TouchableOpacity>
                                )
                            })}
                        </Picker>
                    </View>
                </ScrollView>
                <View>
                    <TouchableOpacity
                        style={styles.submitContainer}
                        onPress={() => this.submitPost()}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
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
        borderRadius: 50,
    },
    submitContainer: {
        marginBottom: 20,
        paddingVertical: 15,
        backgroundColor: '#81ecec',
        borderRadius: 50
    },
    buttonText: {
        textAlign: 'center',
        color: '#f5f6fa',

    }
})


