import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: Dimensions.get('window').width,
            pinchedCount: 0,
            isTransition: true
        }
    }

    componentDidMount() {
        this.startTouch()
        this.startTouch2();
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

    logOutZoomState(event, gestureState, zoomableViewEventObject) {
    }

    beforeZoom(event, gestureState, zoomableViewEventObject) {
        this.setState({ isTransition: zoomableViewEventObject.zoomLevel < zoomableViewEventObject.lastZoomLevel });
        this.startTouch();
        this.startTouch2();
        return true;
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Touch Hand</Text>
                </View>
                <View style={styles.contentContainer}>
                    <ReactNativeZoomableView
                        maxZoom={1}
                        minZoom={0.1}
                        zoomStep={0.1}
                        initialZoom={1}
                        zoomLevel={1}
                        bindToBorders={true}
                        onZoomBefore={this.beforeZoom.bind(this)}
                        onZoomAfter={this.logOutZoomState.bind(this)}>
                        {this.state.isTransition === false ?
                            <LottieView style={{ width: this.state.windowWidth * 1.5 }} source={require('../../styles/animations/touch/finger-scan.json')} ref={touchAnimation => { this.touchAnimation = touchAnimation; }} /> :
                            <LottieView style={{ width: this.state.windowWidth * 1.5 }} source={require('../../styles/animations/touch/fish.json')} ref={touchAnimation2 => { this.touchAnimation2 = touchAnimation2; }} autoPlay />}
                    </ReactNativeZoomableView>
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
        alignItems: 'center',
        flex: 9,
    }
})
