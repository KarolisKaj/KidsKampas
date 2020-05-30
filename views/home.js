import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import colorStyles from '../styles/colorStyles'

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>Hello dear traveler, choose a game to play!</Text>
            </View>
            <View style={styles.emptySpace}></View>
            <View style={styles.gamesContainer}>
                <Button color={colorStyles.mediumIntenseColor} title="Game of Life" onPress={() => navigation.navigate('GameOfLife')}></Button>
                <Button color={colorStyles.mediumIntenseColor} title="Card Match" onPress={() => navigation.navigate('CardMatch')}></Button>
                <Button color={colorStyles.mediumIntenseColor} title="Touch Hand" onPress={() => navigation.navigate('TouchHand')}></Button>
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
        flexDirection: 'row'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Home