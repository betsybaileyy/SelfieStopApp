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
import SelfieCard from './selfieCard';


export default class RecentSelfies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selfies: [
                { image: require('../images/selfie3.jpg') },
                { image: require('../images/selfie1.jpg') },
                { image: require('../images/selfie2.jpg') },
                { image: require('../images/selfie4.jpg') },
                { image: require('../images/selfie2.jpg') },
                { image: require('../images/selfie1.jpg') },
                { image: require('../images/selfie3.jpg') },
                { image: require('../images/selfie4.jpg') },
                { image: require('../images/selfie2.jpg') },
                { image: require('../images/selfie3.jpg') },
                { image: require('../images/selfie1.jpg') }
            ]
        };
    }

    render() {
        const selfies = this.state.selfies.map((selfie, index) => {
            return (
                <SelfieCard key={index} selfie={selfie} />
            );
        });

        return (

            <View>
                <View style={{ flexDirection: 'row', height: 40, justifyContent: 'center', backgroundColor: '#ffcc66', }}>

                    <Text style={{ fontFamily: 'Cochin', fontSize: 20, fontWeight: 'bold', fontFamily: 'Cochin', }}>Recent Selfies</Text>
                </View>

                <ScrollView horizontal={true}>
                    {selfies}
                </ScrollView>
            </View>
        )
    }
}

