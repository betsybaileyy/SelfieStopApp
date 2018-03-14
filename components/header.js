import React, { Component } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, TouchableOpacity, } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { withNavigation } from 'react-navigation';


export default class HeaderBar extends Component {

    navigate() {
        this.props.navigation.navigate('LoginScreen');
    }

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
                      
                    <TouchableOpacity onPress={() =>{ this.props.navigate('LoginScreen') }} >
                    <Text>Log In</Text>
                    </TouchableOpacity>
                   
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