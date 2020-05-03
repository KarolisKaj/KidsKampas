import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import CardMatchBoard from './cardMatchBoard.js'


export default class CardMatch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Card Game</Text>
                </View>
                <View style={styles.boardContainer}>
                    <CardMatchBoard></CardMatchBoard>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center'
    },
    boardContainer: {
        flex: 9,
        flexDirection: 'row',
        alignItems: 'stretch'
    }
})