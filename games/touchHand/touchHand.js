import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import LottieView from 'lottie-react-native';

export default class TouchHand extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Touch Hand</Text>
                </View>
                <View style={styles.contentContainer}>
                    {/* <LottieView source={require('../../styles/animations/whale/WhaleFinAnimation.json')} imageAssetsFolder={'lottie/whaleAnimation'} autoPlay={true} loop={true} autoSize={true} /> */}
                    {/* <LottieView source={require('../../styles/animations/testAnimation/joyParty.json')} autoPlay={true} loop={true} autoSize={true} /> */}
                    <LottieView style={{flex:1}} source={require('../../styles/animations/testAnimation/joyParty.json')} autoplay loop/>
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
        minHeight:100,
        minWidth:100,
        height:200,
        width:200,
        flex: 9,
        alignItems: 'stretch'
    }
})
