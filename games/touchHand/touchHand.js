import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';
import Draggable from 'react-native-draggable';

export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.endGlow()
        this.endTouch()
    }

    startGlowing() {
        this.glowAnimation.play();
    }

    endGlow() {
        this.glowAnimation.play(34, 34);
        this.glowAnimation.pause();
    }
    startTouch() {
        this.touchAnimation.play();
    }

    endTouch() {
        this.touchAnimation.play(300, 300);
        this.touchAnimation.pause();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Touch Hand</Text>
                </View>
                <View style={styles.contentContainer}>
                    <LottieView style={{ flex: 1 }} source={require('../../styles/animations/touch/blue-glow.json')}
                        ref={glowAnimation => { this.glowAnimation = glowAnimation; }} />
                    <LottieView style={{ flex: 1 }} source={require('../../styles/animations/touch/finger-scan.json')}
                        ref={touchAnimation => { this.touchAnimation = touchAnimation; }} />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colorStyles.lowIntenseColor
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    contentContainer: {
        minHeight: 100,
        minWidth: 100,
        height: 200,
        width: 200,
        flex: 9,
        alignItems: 'stretch'
    }
})
