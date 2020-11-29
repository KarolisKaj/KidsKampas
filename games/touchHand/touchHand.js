import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';
import Draggable from 'react-native-draggable';
import { GestureHandler } from 'expo';
import {
    PanGestureHandler,
    PinchGestureHandler,
    RotationGestureHandler,
    ScrollView,
    State,
} from 'react-native-gesture-handler';

export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.startTouchTop()
        this.startTouchBottom()
        // this.startGlowing()
    }

    // startGlowing() {
    //     this.glowAnimation.play();
    // }

    // endGlow() {
    //     this.glowAnimation.play(34, 34);
    //     this.glowAnimation.pause();
    // }
    startTouchTop() {
        this.touchAnimationTop.play();
    }

    endTouchTop() {
        this.touchAnimationTop.play(300, 300);
        this.touchAnimtouchAnimationTopation.pause();
    }
    startTouchBottom() {
        this.touchAnimationBottom.play();
    }

    endTouchBottom() {
        this.touchAnimationBottom.play(300, 300);
        this.touchAnimationBottom.pause();
    }

    _onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {

        }
        console.log(event)
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={{ textAlign: 'center' }}>Touch Hand</Text>
                </View>
                <View style={styles.contentContainer}>
                    <PinchGestureHandler
                        onHandlerStateChange={this._onPinchHandlerStateChange}>
                        <View style={[styles.contentContainer]} >
                            <View style={styles.upperFingerContainer}>
                                <LottieView style={{ flex: 1, marginTop: 20, maxHeight: 125, minHeight: 125 }} source={require('../../styles/animations/touch/finger-scan.json')}
                                    ref={touchAnimationTop => { this.touchAnimationTop = touchAnimationTop; }} />
                            </View>
                            <Animated.View style={{ ...styles.spacerContent, flex: 9 }} />
                            <View style={styles.lowerFingerContainer}>
                                <LottieView style={{ flex: 1, marginTop: -20, maxHeight: 125, minHeight: 125 }} source={require('../../styles/animations/touch/finger-scan.json')}
                                    ref={touchAnimationBottom => { this.touchAnimationBottom = touchAnimationBottom; }} />
                            </View>
                        </View>
                    </PinchGestureHandler>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorStyles.lowIntenseColor,
        alignItems: 'stretch',
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch',
    },
    upperFingerContainer: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'stretch',
        flexDirection: 'column-reverse',
    },
    lowerFingerContainer: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'stretch',
    },
    spacerContent: {
        flex: 8,
        alignItems: 'stretch',
        backgroundColor: 'yellow',
    },
    contentContainer: {
        flex: 9,
        alignItems: 'stretch',
    }
})
