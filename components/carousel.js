import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';

import * as locationsService from './services/locations';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        }
    }

    // async componentDidMount() {
    //     try {
    //         const locations = await locationService.allLocations()
    //         this.setState({ locations }); //this.state.locations
    //     } catch (err) {
    //         if (err.message) {
    //             this.setState({ feedbackMessage: err.message });
    //         }
    //         console.log(err);
    //     }
    //     console.log(this.state.locations);
    // }

    async componentDidMount() {
        this.getLocations();
    }

    async getLocations() {
        try {
            const locations = await locationsService.allLocations();

            console.log(locations);
            this.setState({
                locations
            });
        } catch (err) {
            console.log(err);
        }
        console.log(this.state.locations);
    }

    render() {
        console.log(this.props.navigation);
        return (

            <View style={{ flex: 1 }}>

                <View style={{
                    flex: 1, justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>

                    <ScrollView horizontal={true}>
                        {this.state.locations.map((location, index) => {
                            return (

                                <RkCard key={index}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('LocationScreen', { location }) }}>
                                       
                                            <Text>{location.name}</Text>
                                        

                                        <Image rkCardImg source={location.image} />
                                        <View rkCardContent>
                                            <Text>{location.description}</Text>
                                        </View>
                                       
                                            <Text>Footer</Text>
                                      
                                    </TouchableOpacity>
                                </RkCard>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        )
    }
    //     render() {
    //         // const { navigate } = this.props.navigation;
    //         console.log(this.props.navigation);
    //         const dataCarousel = this.state.locations.map((location, id) => {
    //             return ({
    //                 id: location.index,
    //                 title: location.name,
    //                 imagePath: location.image
    //             })
    //             return (
    //                 // <View>
    //                 //     <TouchableOpacity 
    //                 // onPress={() => {
    //                 // this.setState({ location: dataCarousel });
    //                 // console.log(this.props.navigation);

    //                 // this.props.navigation.navigate('LocationScreen',
    //                 //     { location })
    //                 // }}
    //                 //  >
    //                 <SwipeableParallaxCarousel
    //                     key={id}
    //                     onPress={() => { this.props.navigation.navigate('LocationScreen', { location }) }}
    //                     data={
    //                         dataCarousel
    //                     }
    //                     titleColor={'white'}
    //                     navigation={'true'}
    //                     navigationType={'dots'}
    //                     height={300}
    //                     align={'center'}
    //                 />
    //                 // <Text> Click Me! </Text>
    //                 //     {/* </TouchableOpacity>
    //                 // </View> */}
    //                 // );
    //               )
    //           })
    //     }
    // ;

}
