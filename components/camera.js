import React, { Component } from 'react';
import {
    Alert
} from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import SignupScreen from '../screens/SignupScreen';

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    onBottomButtonPressed(event) {
        let json = event.captureImages;

        let filePath = json[0].uri
        this.setState({ image: filePath })
        Alert.alert(
            `${event.type} button pressed`,
            `${this.state.image}`,

            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View>
                <CameraKitCameraScreen
                    actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
                    onBottomButtonPressed={(event) => this.onBottomButtonPressed(event)}
                    flashImages={{
                        on: require('../images/camera/flashOn.png'),
                        off: require('../images/camera/flashOff.png'),
                        auto: require('../images/camera/flashAuto.png')
                    }}
                    cameraFlipImage={require('../images/camera/cameraFlipIcon.png')}
                    captureButtonImage={require('../images/camera/cameraButton.png')}
                />
            </View>
        );


    }
}
