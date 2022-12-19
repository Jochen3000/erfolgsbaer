import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function onboarding({ setOnBoarding }) {

    return (
        <View style={styles.container}>
            <View style={styles.textcontainer}>
                <Text>First Time Usage Erklärung</Text>
                <Text style={styles.headline}>Onboarding</Text>
                <Text>10 min Start in den Morgen</Text>
                <Text>Impuls am Mittag</Text>
                <Text>10 min am Abend</Text>

            </View>
            <Button
                title="Los gehts"
                onPress={() => {
                    setOnBoarding(false);
                    AsyncStorage.setItem('onboarding', JSON.stringify(false));
                }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontSize: 20,
        paddingVertical: 20,
    },
    textcontainer: {
        alignItems: 'center',
        paddingBottom: 100,
    },
})

export default onboarding;