import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import Draggable from 'react-native-draggable';

export default class SeaMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            windowWidth: Dimensions.get('window').width,
            windowWidth: Dimensions.get('window').height,
            isTransition: false,
            timeLeft: 30,
            timer: undefined
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View>
                <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={(event) => console.log(event)} />
                <Draggable x={200} y={300} renderColor='red' renderText='B' />
                <Draggable />
                <Draggable x={50} y={50}>
                </Draggable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorStyles.lowIntenseColor,
        flexDirection: 'row-reverse',
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        flex: 9,
        // backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    center: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        backgroundColor: colorStyles.lowIntenseColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigText: {
        fontSize: 32
    }
})
