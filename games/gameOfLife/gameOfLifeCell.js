import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import colorStyles from '../../styles/colorStyles'

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlive: props.isAlive,
        };
    }

    toggleDeath() {
        this.setState({ isAlive: !this.state.isAlive })
    }
    getStyle() {
        let color = this.state.isAlive ? colorStyles.lowerIntenseColor : colorStyles.intenseColor;
        return {
            backgroundColor: color,
        }
    }

    render() {
        return (
            <View style={{ ...styles.cell, ...this.getStyle() }}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        flex: 1,
        borderWidth: 1,
        borderColor: colorStyles.lowIntenseColor
    }
});
