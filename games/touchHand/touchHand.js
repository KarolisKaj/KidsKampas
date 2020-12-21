import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import { PinchGestureHandler, State } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable';


export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: Dimensions.get('window').width,
            isTransition: false,
            pinchScaleThreshold: 0.8,
            killedTimes: 0,
            timeLeft: 30,
            timer: undefined
        }
    }

    componentDidMount() {
        this.startTouch()
        this.startTouch2();
        this.startTimer();
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    startTimer() {
        this.state.timer = setInterval(() => {
            if (this.state.timeLeft < 1) {
                clearInterval(this.state.timer);
                setTimeout(function () { this.props.navigation.navigate('GameOfLife') }.bind(this), 5000);
                setTimeout(function () { this.props.navigation.navigate('Home') }.bind(this), 10000);
            }
            else {
                this.setState({ timeLeft: this.state.timeLeft - 1 })
            }
        }, 1000);
    }
    startTouch() {
        this.touchAnimation && this.touchAnimation.play();
    }

    endTouch() {
        this.touchAnimation && this.touchAnimation.play(300, 300);
        this.touchAnimation && this.touchAnimation.pause();
    }

    startTouch2() {
        this.touchAnimation2 && this.touchAnimation2.play();
    }

    endTouch2() {
        this.touchAnimation2 && this.touchAnimation2.play(300, 300);
        this.touchAnimation2 && this.touchAnimation2.pause();
    }

    onPinchStateChange(event) {
        if (this.state.isTransition)
            return;

        if (event.nativeEvent.oldState === State.ACTIVE && event.nativeEvent.scale < this.state.pinchScaleThreshold) {
            this.setState({ isTransition: true, killedTimes: this.state.killedTimes + 1 });
            this.startTouch2();
            setTimeout(function () { this.setState({ isTransition: false }); this.startTouch(); }.bind(this), 1200);
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Touch Hand</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.victoryText}>Score: {this.state.killedTimes}</Text>
                    <Text style={styles.victoryText}>Time: {this.state.timeLeft}</Text>
                </View>
                <PinchGestureHandler
                    onHandlerStateChange={this.onPinchStateChange.bind(this)}>
                    <View style={styles.contentContainer}>
                        {this.state.isTransition === false ?
                            <LottieView style={{ width: this.state.windowWidth * 1.5 }} source={require('../../styles/animations/touch/fish.json')} ref={touchAnimation2 => { this.touchAnimation2 = touchAnimation2; }} autoPlay /> :
                            <LottieView style={{ width: this.state.windowWidth * 1 }} source={require('../../styles/animations/touch/explosion.json')} ref={touchAnimation => { this.touchAnimation = touchAnimation; }} />}
                    </View>
                </PinchGestureHandler>
                {this.state.timeLeft === 0 && <View style={styles.center}>
                    <Animatable.Text style={styles.victoryText} animation="pulse" easing="ease-out" iterationCount="infinite">You won with {this.state.killedTimes}!</Animatable.Text>
                </View>}
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
        alignItems: 'center',
        flex: 9,
        // backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    center: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        backgroundColor: colorStyles.lowIntenseColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    victoryText: {
        fontSize: 32
    }
})
