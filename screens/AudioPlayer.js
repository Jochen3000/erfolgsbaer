import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
import Slider from '@react-native-community/slider';

import useAudio from '../hooks/useAudio';


const AudioPlayer = () => {

    const {
        getProgress,
        duration,
        isPlaying,
        onPlayPausePress,
        pauseSound,
        setPausePosition,
        position
    } = useAudio();

    return (
        <View>
            <View style={styles.player}>

                <View style={[styles.progress, { width: `${getProgress()}%` }]} />
                <View style={styles.row}>
                    <View style={styles.iconsContainer}>
                        <Text style={styles.description}>Duration: {duration} </Text>
                        <TouchableOpacity>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} onPress={onPlayPausePress} size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.slidercontainer}>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={duration != null && duration}
                    minimumTrackTintColor="tomato"
                    maximumTrackTintColor="lightgrey"
                    value={position != null && position}
                    onSlidingStart={() => {
                        if (isPlaying) {
                            pauseSound();
                        }
                    }}
                    onSlidingComplete={(dragpos) => {
                        setPausePosition(dragpos);
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    player: {
        backgroundColor: 'tomato',
        width: '100%',
        height: 120,
        marginTop: 60,
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
    slidercontainer: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    slider: {
        width: 300,
        height: 40,
        marginTop: 40,
    },
})

export default AudioPlayer;