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
        const { sound } = await Audio.Sound.createAsync(require('../assets/let-not.mp3'));
        setSound(sound);

        sound.setOnPlaybackStatusUpdate((status) => {
            console.log(status.positionMillis);
            setPosition(status.positionMillis);
        });

        console.log('Playing Sound');
        await sound.playAsync();
        setIsPlaying(true);
        const Status = await sound.getStatusAsync();
        console.log('duration', Status.durationMillis);
        console.log('position', Status.positionMillis);
        setDuration(Status.durationMillis);
        setPosition(Status.positionMillis);
    }

    async function pauseSound() {
        console.log('pausing sound');
        await sound.pauseAsync();
        setIsPlaying(false);
    }

    const onPlayPausePress = () => {
        if (isPlaying) {
            pauseSound();
        } else {
            playSound();
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
                <View style={styles.iconsContainer}>
                    <Text style={styles.description}>Duration: {duration} </Text>
                    <Text style={styles.description}>Postion: {position}  </Text>
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
    description: {
        color: 'white',
        fontWeight: 'bold'
    },
    row: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AudioPlayer;