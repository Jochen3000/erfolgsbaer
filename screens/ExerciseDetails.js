import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';
import AudioPlayer from '../components/AudioPlayer';
function ExerciseDetails({ route }) {

    const audioUri = route.params.itemObj.audiourl;

    return (
        <View style={styles.card}>
            <Text style={styles.subtitle}>{route.params.itemObj.id}</Text>
            <Text style={styles.subtitle}>{route.params.itemObj.exercise}</Text>
            <Text style={styles.subtitle}>{route.params.itemObj.audiourl}</Text>
            <AudioPlayer audioUri={audioUri} />
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        width: '100%',
    },
    img: {
        width: '100%',
        height: 300,
    },
    subtitle: {
        paddingLeft: 16,
        paddingTop: 8
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        padding: 16
    },
    profilebox: {
        flexDirection: 'row',
        marginTop: 20
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 16,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
    }
})

export default ExerciseDetails;