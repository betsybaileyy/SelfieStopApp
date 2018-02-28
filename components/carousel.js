import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';

const datacarousel = [
    {
        "id": 339964,
        "title": "Sponsored Locations",
        "imagePath": "http://www.nashvillelifestyles.com/_scripts/img_pp_crop.php?w=632&h=475&img=/_uploads/articles/IMG_82.jpg",
    },
    {
        "id": 315635,
        "imagePath": "http://www.visitmusiccity.com/Content/cms/uploads/TwoOldHippies300x300.png",
    },

    {
        "id": 339403,
        "title": "The Gulch",
        "imagePath": "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/27750846_10156795484380021_4193555394840914156_n.jpg?oh=67ebe617547dadff7f9a358a22fa333d&oe=5B49CA7A",
    },
];


export class MyCarousel extends Component {



    render() {
        return (
            <SwipeableParallaxCarousel
                data={datacarousel}
                titleColor={'white'}
                navigation={'true'}
                navigationType={'dots'}
                height={300}
                align={'center'}
            />
        );
    }
}