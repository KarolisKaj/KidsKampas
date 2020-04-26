import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.welcome}>Hello dear traveler, choose a game to play!</Text>
            </View>
            <View style={styles.emptySpace}></View>
            <View style={styles.gamesContainer}>
                <Button title="Game of Life" onPress={() => navigation.navigate('GameOfLife')}></Button>
                <Button title="Card Match" onPress={() => navigation.navigate('CardMatch')}></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#92bf3f',
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