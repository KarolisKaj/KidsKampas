import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Animated } from 'react-native';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: props.displayValue,
            isFlipped: false
        }
    }

    flipCard() {
        this.setState({ isFlipped: !this.state.isFlipped });
    }

    render() {
        return (
            <View>
                <Text>111</Text>
            </View>
        );
    }
}