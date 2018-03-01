import React, { Component } from 'react';
import {
    Alert
} from 'react-native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';


export default class Camera extends Component {
    onBottomButtonPressed(event) {
        const captureImages = JSON.stringify(event.captureImages);
        Alert.alert(
            `${event.type} button pressed`,
            `${captureImages}`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
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
        );
    }
}
