import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { RkButton, RkCard, RkTheme, RkText } from 'react-native-ui-kitten';
import * as getLocationService from '../components/services/locations';

export default class LocationScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
        };
    }

    getLocationImages() {
       getLocaionService.one()
            .then((images) => {
                this.setState({
                    images: images
                });
            }).catch((err) => {
                console.log(err);
            });
    }
    

    // getImages(api call here){
    //     render
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                </View>
                <View style={{ flex: 1, justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
                <ScrollView>rt
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={this.state.images} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                    {/* <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie4.jpg')} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie3.jpg')} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard>
                    <RkCard>
                        <View rkCardHeader>
                            <Text>Header</Text>
                        </View>
                        <Image rkCardImg source={require('../images/selfie2.jpg')} />
                        <View rkCardContent>
                            <Text> quick brown fox jumps over the lazy dog</Text>
                        </View>
                        <View rkCardFooter>
                            <Text>Footer</Text>
                        </View>
                    </RkCard> */}
                </ScrollView>
                </View>
            </View>
        )
    }
}

{/* <SectionList
  renderItem={({item}) => <ListItem title={item.title} />}
  renderSectionHeader={({section}) => <H1 title={section.key} />}
  sections={[ // homogeneous rendering between sections
    {data: [...], key: ...},
    {data: [...], key: ...},
    {data: [...], key: ...},
  ]}
/>

<SectionList
  sections={[ // heterogeneous rendering between sections
    {data: [...], key: ..., renderItem: ...},
    {data: [...], key: ..., renderItem: ...},
    {data: [...], key: ..., renderItem: ...},
  ]}
/> */}

var styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: '#CCC',
        margin: 10,
        width: 100,
        height: 100
    }
});