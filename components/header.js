import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';


export default class HeaderBar extends Component {
    render() {
        return (
            <Container>
                <Header
                    style={{ backgroundColor: '#81ecec' }}
                >
                    <Left>

                    </Left>
                    <Body
                        style={{ paddingTop: 5, alignItems: 'center', justifyContent: 'center', }}
                        >
                    <Image
                            style={{ marginLeft: 100, width: 65, height: 65, }}
                            source={require('../images/headerLogo.png')}
                        />
                    </Body>
                    <Right>
                        <Text
                            style={{ fontSize: 18, fontFamily: 'Cochin' }}
                        >Selfie Stop</Text>
                    </Right>
                </Header>
            </Container>
        );
    }
}