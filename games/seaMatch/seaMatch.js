import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import colorStyles from '../../styles/colorStyles'
import Draggable from 'react-native-draggable';
import { Square, Rectangle, Circle, Oval, Octagon, Trapezoid } from 'react-native-shape';

export default class SeaMatch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTransition: false,
            timeLeft: 30,
            timer: undefined,
            shapeCount: 6,
            sizeOfShape: 50,
            margin: 30,
            oneSpaceHeight: Dimensions.get('window').height / 7,
            colors: ['yellow', 'purple', 'black', 'red', 'blue', 'orange', 'magenta'],
            shapes: [(color) => <Square color={color} />, (color) => <Rectangle color={color} />, (color) => <Circle color={color} />, (color) => <Oval color={color} />, (color) => <Octagon color={color} />, (color) => <Trapezoid color={color} />],
            allShapes: undefined,
            shapesMap: undefined,

        }
    }

    getRandomArray() {
        return Array.from({ length: this.state.shapeCount }, (_, k) => k).sort(() => .5 - Math.random());
    }

    componentDidMount() {
        let slots = this.getRandomArray();
        let shapes = this.getRandomArray();
        this.state.shapesMap = Array(this.state.shapeCount).fill().map((_, i) => {
            let slotStartHeight = (slots[i] + 1) * this.state.oneSpaceHeight;
            let shapeStartHeight = (shapes[i] + 1) * this.state.oneSpaceHeight;
            let margin = (this.state.oneSpaceHeight - this.state.sizeOfShape) / 2;
            let shapeXPosition = Dimensions.get('window').width - this.state.sizeOfShape;
            return {
                slotStartY: slotStartHeight,
                slotStartX: margin,
                shapeStartY: shapeStartHeight,
                shapeStartX: shapeXPosition,
                color: this.state.colors[shapes[i]],
                isMatched: false
            }
        });
        this.setState({ allShapes: this.createShapes(this.state.shapesMap) });
        console.log(this.state.shapesMap);
    }

    createShapes(shapesMap) {
        return shapesMap.map((shapeMap, i) => {
            let getTopStyle = () => { return { top: shapeMap.slotStartY, position: 'absolute', left: this.state.margin } };
            return {
                shape: (!shapeMap.isMatched && <Draggable
                    x={shapeMap.shapeStartX}
                    y={shapeMap.shapeStartY}
                    renderSize={this.state.sizeOfShape}
                    renderColor={'transperant'}
                    shouldReverse
                    onDragRelease={((_, gestureState, __) => {
                        console.log(shapeMap)
                        if (shapeMap.slotStartX < gestureState.moveX && gestureState.moveX < (shapeMap.slotStartX + this.state.sizeOfShape)
                            && shapeMap.slotStartY < gestureState.moveY && gestureState.moveY < (this.state.sizeOfShape + shapeMap.slotStartY)) {
                            shapeMap.isMatched = true;
                            this.setState({ allShapes: this.createShapes(this.state.shapesMap) });
                        }
                    }).bind(this)} >
                    <View style={{ width: this.state.sizeOfShape, width: this.state.sizeOfShape }}>
                        {this.state.shapes[i](shapeMap.color)}
                    </View>
                </Draggable>),
                slot: (<View style={getTopStyle()} >
                    { this.state.shapes[i](shapeMap.isMatched ? shapeMap.color : 'grey')}
                </ View>)
            }
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text>Sea Match</Text>
                </View>
                <View>
                    {this.state.allShapes && this.state.allShapes.map(x => x.shape)}
                    {this.state.allShapes && this.state.allShapes.map(x => x.slot)}
                </View>
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
