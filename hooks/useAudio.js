import { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function useAudio({ audioUri }) {
    const [sound, setSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(null);
    const [position, setPosition] = useState(null);
    const [pausePosition, setPausePosition] = useState(0);

    async function playSound() {
        // load
        const { sound } = await Audio.Sound.createAsync({
            uri: audioUri
        });
        setSound(sound);

        // play
        await sound.playFromPositionAsync(pausePosition);
        setIsPlaying(true);
        const Status = await sound.getStatusAsync();
        setDuration(Status.durationMillis);
        setPosition(Status.positionMillis);

        //play in bg
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            playsInSilentModeIOS: true,
        })

        // track status and check end of track
        sound.setOnPlaybackStatusUpdate((status) => {
            setPosition(status.positionMillis);
            if (status.didJustFinish) {
                console.log('ende gelände')
                setIsPlaying(false);
                setPausePosition(0);
            }
        });
    }

    async function pauseSound() {
        await sound.pauseAsync();
        setIsPlaying(false);
        setPausePosition(position);
    }

    // Play-Pause switch
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

    return {
        onPlayPausePress,
        getProgress,
        duration,
        isPlaying,
        pauseSound,
        setPausePosition,
        position
    };
}

