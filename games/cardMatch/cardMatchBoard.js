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
        let boardSize = 2
        this.state = {
            boardSize: boardSize,
            board: generateBoard(boardSize, this.handleCardInteraction.bind(this)),
            cardFlipped: undefined,
            boardLocked: false,
            flipDelay: props.flipDelay,
            onFinished: props.onFinished,
        }
    }

    handleCardInteraction(displayValue, id, isFlipped, card) {
        if (this.state.boardLocked && isFlipped) {
            card.flipCard()
            return
        }
        if (isFlipped && this.state.cardFlipped === undefined) {
            this.setState({ cardFlipped: card })
        }
        else if (isFlipped && this.state.cardFlipped) {
            if (displayValue === this.state.cardFlipped.state.displayValue && this.state.cardFlipped.state.id !== id) {
                card.lockCard()
                this.state.cardFlipped.lockCard()
                this.setState({ cardFlipped: undefined }, () => {
                    if (this.state.board.every(row => row.every(c => c.ref.current.state.locked))) {
                        console.log("found")
                        this.state.onFinished()
                    }
                })




            }
            else {
                this.state.boardLocked = true;
                setTimeout(function () {
                    this.state.cardFlipped.flipCard()
                    card.flipCard()
                    this.setState({ cardFlipped: undefined })
                    this.state.boardLocked = false
                }.bind(this), this.state.flipDelay);
            }

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
        alignItems: 'stretch',
        justifyContent: 'space-around'

    },
    rowContainer: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
})