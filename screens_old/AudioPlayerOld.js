import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';

function AudioPlayerOld() {

    const [sound, setSound] = React.useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/let-not.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function resumeSound() {
        await sound.playFromPositionAsync(1286)
    }

    async function pauseSound() {
        console.log('pausing sound');
        await sound.pauseAsync();
        const Status = await sound.getStatusAsync()
        console.log('position', Status)
    }

    async function stopSound() {
        console.log('stopping sound');
        await sound.stopAsync();
    }

    React.useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.container}>
            <Button title="Play" onPress={playSound} />
            <Button title="Pause" onPress={pauseSound} />
            <Button title="Resume" onPress={resumeSound} />
            <Button title="Stop" onPress={stopSound} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 40,
        margin: 5
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18
    }
})

export default AudioPlayerOld;