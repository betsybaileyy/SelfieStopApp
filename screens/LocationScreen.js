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
        console.log(this.state.userImages);
    }

    componentDidUpdate() {
        console.log(this.state.userImages);
    }


    async getLocationImages() {
        try {
            const userImages = await imageService.allImages(this.props.navigation.state.params.location.id)
            this.setState({
                userImages
            });
            console.log(this.state.userImages);
        } catch (err) {
            console.log(err);
        }
    }
    _renderFooter(options) {
        return (
            <View style={styles.name}>
                <PhotographerName />
            </View>

        );
    }

    render() {
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
                <ScrollView>
                    <View style={styles.photoContainer}>
                        {this.state.userImages.map((userImage, id) => {
                            let index = userImage.id;
                            console.log(userImage.image);
                            return (
                                // <Image
                                //     key={index}
                                //     style={{ width: 66, height: 58 }}
                                //     source={{ uri: userImage.image }} />

                                <RkModalImg key={index} source={{ uri: userImage.image }}
                                    style={styles.photoItems}
                                    modalImgStyle={styles.modalImg}
                                    modalStyle={styles.modal}
                                    renderFooter={this._renderFooter}
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
