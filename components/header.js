import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
// import Login from './Login';


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
                            style={{ marginLeft: 100, width: 300, height: 65, }}
                            source={require('../images/headerLogo.png')}
                        />
                    </Body>
                    <Right>
                    {/* <KeyboardAvoidingView behavior='padding' style={styles.loginContainer}>
                    <Login text='Log In' navigation={this.props.navigation} />
                    </KeyboardAvoidingView> */}
                        <Text
                            style={{ fontSize: 18, fontFamily: 'Cochin' }}
                            navigation={this.props.navigate}
                        >Log In</Text>
                    </Right>
                </Header>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 10,
        justifyContent: 'center',
    },
    logo: {
        height: 220,
        width: 320,
    }
})