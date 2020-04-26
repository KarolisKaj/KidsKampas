import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";


export default class CardMatch extends Component {
    render() {
        return (<View style={styles.container}><Text>Card Game</Text></View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    boardContainer: {
        flex: 9,
        flexDirection: 'row',
        alignItems: 'stretch'
    }
})