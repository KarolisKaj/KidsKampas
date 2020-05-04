import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Card from './card.js'


function generateBoard(size, notifyFlipped) {
    let possibleValues = (size * size / 2)
    let board = []
    for (let i = 0; i < possibleValues; i++) {
        let cardRef1 = React.createRef()
        board.splice(Math.floor(Math.random() * board.length), 0, { element: (<Card key={`1x${i}`} id={`1x${i}`} ref={cardRef1} displayValue={i} notifyFlipped={notifyFlipped}></Card>), ref: cardRef1 });
        let cardRef2 = React.createRef()
        board.splice(Math.floor(Math.random() * board.length), 0, { element: (<Card key={`2x${i}`} id={`2x${i}`} ref={cardRef2} displayValue={i} notifyFlipped={notifyFlipped}></Card>), ref: cardRef2 });
    }

    let result = []
    while (board.length) {
        result.push(board.splice(0, size));
    }
    return result
}

export default class CardMatchBoard extends Component {
    constructor(props) {
        super(props)
        let boardSize = 4
        this.state = {
            boardSize: boardSize,
            board: generateBoard(boardSize, this.handleCardInteraction),
            cardsFlipped: []
        }
    }

    handleCardInteraction(displayValue, id, isFlipped) {
        if (isFlipped && cardsFlipped.length === 1) {
            let cardFlippedExisting = this.state.cardsFlipped.find(x => x.ref.state.displayValue === displayValue)
            let cardFlipped = this.state.board.find(x => x.ref.state.id === id)

        }
    }

    render() {
        return (
            <View style={styles.boardContainer}>
                {this.state.board.map((line, index) => (<View key={index} style={styles.rowContainer}>{line.map(card => card.element)}</View>))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boardContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    rowContainer: {
        flex: 1,
        alignItems: 'stretch'
    },
})