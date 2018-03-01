import React from 'react';
import { Image } from 'react-native';
import { RkCard, RkTheme } from 'react-native-ui-kitten';

export default function (props) {
    return (
        <RkCard rkType='heroImage'>
            <Image rkCardImg source={props.selfie.image} />
        </RkCard>
    );
}

RkTheme.setType('RkCard', 'heroImage', {
    img: {
        height: 100,
        width: 100,
        opacity: 1,
        marginTop: 0,
    },
});
