import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';
import { PinchGestureHandler, State } from 'react-native-gesture-handler';

export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            initialHeight: 0,
            windowWidth: Dimensions.get('window').width,
            windowHeight: Dimensions.get('window').height,
        }
    }

    componentDidMount() {
        this.startTouchTop()
        this.startTouchBottom()
        console.log(this.state.windowWidth)
        console.log(this.state.windowHeight)
    }

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

    onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE && event.nativeEvent.numberOfPointers === 2) {

        }
        // console.log(this.spacerElement)
        console.log(event.nativeEvent)
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Touch Hand</Text>
                </View>
                <View style={styles.contentContainer}>
                    <PinchGestureHandler
                        onHandlerStateChange={this.onPinchHandlerStateChange}>
                        <Animated.View style={styles.pinchableContent} >
                            <View style={styles.upperFingerContainer}>
                                <LottieView style={{ flex: 1, marginTop: 20, maxHeight: 125, minHeight: 125, width: 125 }} source={require('../../styles/animations/touch/finger-scan.json')}
                                    ref={touchAnimationTop => { this.touchAnimationTop = touchAnimationTop; }} />
                            </View>
                            <View ref={spacerElement => this.spacerElement = spacerElement} style={{ ...styles.spacerContent }} />
                            <View style={styles.lowerFingerContainer}>
                                <LottieView style={{ flex: 1, marginTop: -20, maxHeight: 125, minHeight: 125, width: 125 }} source={require('../../styles/animations/touch/finger-scan.json')}
                                    ref={touchAnimationBottom => { this.touchAnimationBottom = touchAnimationBottom; }} />
                            </View>
                        </Animated.View>
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
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        flex: 9,
        alignItems: 'center',
    },
    upperFingerContainer: {
        flex: 1,
        backgroundColor: 'green',
        flexDirection: 'column-reverse',
    },
    lowerFingerContainer: {
        flex: 1,
        backgroundColor: 'blue',
    },
    spacerContent: {
        flex: 8,
        backgroundColor: 'yellow',
    },
    pinchableContent: {
        flex: 1
    }
})
