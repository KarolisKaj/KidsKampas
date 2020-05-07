import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";
import CardMatchBoard from './cardMatchBoard.js'


export default class CardMatch extends Component {

    gameFinished() {
        console.log("navigation called")
        this.props.navigation.navigate('CardMatch')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Card Game</Text>
                </View>
                <View style={styles.boardContainer}>
                    <CardMatchBoard flipDelay={750} onFinished={this.gameFinished.bind(this)}></CardMatchBoard>
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