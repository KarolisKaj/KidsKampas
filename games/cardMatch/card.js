import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, TouchableOpacity, Animated } from 'react-native';
import CardFlip from 'react-native-card-flip';

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayValue: props.displayValue,
            isFlipped: false,
            notifyFlipped: props.notifyFlipped,
            locked: false
        }
    }

    lockCard() {
        this.setState({ locked: true })
    }

    flipCard() {
        if (this.state.locked) return
        this.setState({ isFlipped: !this.state.isFlipped });
        this.card.flip()
        this.state.notifyFlipped(this.state.displayValue, this.props.id, this.state.isFlipped)
    }

    render() {
        return (
            <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
                <TouchableOpacity style={styles.openedCard} onPress={() => this.flipCard()} ><Text>Click me!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.closedCard} onPress={() => this.flipCard()} ><Text>{this.state.displayValue}</Text></TouchableOpacity>
            </CardFlip>
        );
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center'
    },
    openedCard: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    closedCard: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'yellow'
    }
})