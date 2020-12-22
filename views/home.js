import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import colorStyles from '../styles/colorStyles'

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>Hello dear traveler, choose a game to play!</Text>
            </View>
            <View style={styles.emptySpace}></View>
            <View style={styles.gamesContainer}>
                <View color={styles.button}>
                    <Button title="Game of Life" onPress={() => navigation.navigate('GameOfLife')}></Button>
                </View>
                <View color={styles.button}>
                    <Button title="Card Match" onPress={() => navigation.navigate('CardMatch')}></Button>
                </View>
                <View color={styles.button}>
                    <Button title="Pinch Fish" onPress={() => navigation.navigate('PinchFish')}></Button>
                </View>
                <View color={styles.button}>
                    <Button title="Sea Match" onPress={() => navigation.navigate('SeaMatch')}></Button>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: colorStyles.lowIntenseColor,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    emptySpace: {
        flex: 1,
    },
    gamesContainer: {
        flex: 8,
        justifyContent: 'space-around',
        alignContent: 'space-around',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
    },
    button: {
        color: colorStyles.mediumIntenseColor,
        height: 100, marginTop: 10
    }
});

export default Home
