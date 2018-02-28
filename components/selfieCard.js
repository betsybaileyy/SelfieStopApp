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


export default class SelfieCard extends Component {

    render() {
        return (

            <View>
            <View style={{ flexDirection: 'row', height: 40, justifyContent: 'center', }}>

                <Text style={{fontSize: 20, fontWeight: 'bold', }}>Recent Selfies</Text>
            </View>

            <ScrollView horizontal={true}>

                <RkCard rkType='heroImage'>
                    <Image rkCardImg source={require('../images/selfie3.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                    <Image rkCardImg source={require('../images/selfie1.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                    <Image rkCardImg source={require('../images/selfie3.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                    <Image rkCardImg source={require('../images/selfie1.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                <Image rkCardImg source={require('../images/selfie2.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                <Image rkCardImg source={require('../images/selfie3.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                <Image rkCardImg source={require('../images/selfie2.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                <Image rkCardImg source={require('../images/selfie3.jpg')} />
                </RkCard>

                <RkCard rkType='heroImage'>
                <Image rkCardImg source={require('../images/selfie4.jpg')} />
                </RkCard>

            </ScrollView>
            </View>
        )
    }
}

RkTheme.setType('RkCard', 'heroImage', {
    img: {
        height: 100,
        width: 100,
        opacity: 1,
        marginTop: 0,


    },

});
