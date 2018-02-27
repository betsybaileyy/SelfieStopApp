import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import SignupScreen from './SignupScreen';



export default class UITest extends Component {

    render() {
        return (
            <ScrollView>
                <RkCard rkType='story'>
                    <Image rkCardImg source={require('../images/skyline.jpg')} />
                    <View rkCardHeader>
                        <RkText rkType='header' style={{ fontSize: 30 }}>Once upon a time</RkText>
                    </View>
                    <View rkCardContent>
                        <RkText style={{ textAlign: 'center' }}>
                            One morning, when Gregor Samsa woke from happy dreams,
                            he found himself transformed in ...
                    </RkText>
                    </View>
                    <View rkCardFooter>
                        <RkButton onPress={() => { this.navigate('Signup') }} rkType='small outline'>Learn More</RkButton>
                        <RkButton rkType='small'>Read later</RkButton>
                    </View>
                </RkCard>
            </ScrollView>
        )
    }
}

RkTheme.setType('RkCard', 'story', {
    img: {
        height: 250,
        opacity: 0.7
    },
    header: {
        alignSelf: 'center',

    },
    content: {
        alignSelf: 'center'
    }
});