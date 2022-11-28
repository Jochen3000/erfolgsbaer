import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';

const AudioPlayer = () => {

    const [song, setSong] = useState(null);
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [position, setPosition] = useState(null);

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../assets/let-not.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
    }

    async function pauseSound() {
        console.log('pausing sound');
        await sound.pauseAsync();
        const Status = await sound.getStatusAsync()
        setIsPlaying(false);
        console.log('position', Status)
    }

    const onPlayPausePress = () => {
        if (isPlaying) {
            pauseSound();
        } else {
            playSound();
        }
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
            <View style={[styles.progress, { width: `100%` }]} />
            <View style={styles.row}>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity>
                        <FontAwesome name={isPlaying ? 'pause' : 'play'} onPress={onPlayPausePress} size={30} color={"white"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 300,
        backgroundColor: 'tomato',
        width: '100%',
        height: 100,
    },
    progress: {
        height: 10,
        backgroundColor: '#bcbcbc'
    },
    row: {
        flexDirection: 'row',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25,
        width: '100%'
    },
})

export default AudioPlayer;