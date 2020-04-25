import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Cell from './cell';
import MakeTurn from './logic'


function generateBoard(size) {
    let board = []
    for (i = 0; i < size; i++) {
        board.push([])
        for (j = 0; j < size; j++) {
            board[i].push((<Cell key={`${i}${j}`} isAlive={(j + i) % 2 === 0}></Cell>))
        }
    }
    return board
}

export default class GameOfLife extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardState: generateBoard(10),
            isSpinning: false
        }
        this.startSpining()
    }

    startSpining() {
        this.state.isSpinning = true
        while (this.state.isSpinning) {
            MakeTurn(this.state.boardState)
        }
    }
    stopSpinning() {
        this.state.isSpinning = false
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Game of life</Text>
                </View>
                <View style={styles.boardContainer}>
                    {this.state.boardState.map(cells => (<View style={styles.textContainer}>{cells}</View>))}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
    boardContainer: {
        flex: 9,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    cell: {
    }
})
