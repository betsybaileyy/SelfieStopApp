import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkCardContainer } from 'react-native-ui-kitten';
import { withNavigation } from 'react-navigation';
import * as locationsService from './services/locations';

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            locations: [],
        }
    }

    static navigationOptions = { header: null };

    async componentDidMount() {
        this.getLocations();
    }

    async getLocations() {
        try {
            const locations = await locationsService.allLocations();

            this.setState({
                locations,
                loading: false
            });
        } catch (err) {
            console.log(err);
        }

    }

    navigate() {
        this.props.navigation.navigate('LocationScreen', { location });
    }

    render() {
        const shuffledPosts = shuffleArray(this.state.locations);
        if (this.state.loading === true) {
            return (
                <View>

                    <View style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center'
                    }}>

                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            horizontal={true}
                            height={180}
                        >
                            <ActivityIndicator size="large" color="#808080" />

                        </View>
                    </View>
                </View>
            )
        } else {
            return (

                <View>

                    <View style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>

                        <ScrollView horizontal={true} height={200}>
                            {shuffledPosts.map((location, index) => {
                                return (
                                    <RkCard key={index} width={400}>
                                        <TouchableOpacity onPress={() => { this.props.navigate('LocationScreen', { location }) }} >
                                            <View style={styles.overlayContainer} rkCardImgOverlay>
                                                <Text style={styles.overlayText}>  {(location.name).toUpperCase()} </Text>
                                            </View>
                                            <Image style={styles.img} rkCardImg source={{ uri: location.image }} />
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
}

RkTheme.setType('RkCard', {
    img: {
        height: 200,

    },
    content: {
        alignSelf: 'center',

    },
    imgOverlay: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 400,
    },
    overlayContainer: {
        height: 230,
        width: 400,
    },
    overlayText: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Cochin',
        paddingTop: 5
    },
})
