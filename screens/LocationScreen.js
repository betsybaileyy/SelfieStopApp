import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText, RkModalImg } from 'react-native-ui-kitten';
import * as imageService from '../components/services/images';
import PhotographerName from '../components/photographerName';

export default class LocationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userImages: [],
        };
    }

    static navigationOptions = { header: null };

    async componentDidMount() {
        this.getLocationImages(); // Sets the state
    }

    async getLocationImages() {
        try {
            const userImages = await imageService.allImages(this.props.navigation.state.params.location.id)
            this.setState({
                userImages
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
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
                <ScrollView>
                    <View style={styles.photoContainer}>
                        {this.state.userImages.map((userImage, id) => {
                            let index = userImage.id;
                            return (
                                <RkModalImg key={index} source={{ uri: userImage.image }}
                                    style={styles.photoItems}
                                    modalImgStyle={styles.modalImg}
                                    modalStyle={styles.modal}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
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
    photoContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
    },

    photoItems: {
        height: 80,
        width: 87,
        marginTop: 1,
        marginBottom: 1,
    },
    modal: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalImg: {
        height: 300,
        width: 400,
        marginTop: 200,
        // margin: 40,
    },
    name: {
        alignItems: 'flex-end',
        paddingBottom: 150,
    },
})
