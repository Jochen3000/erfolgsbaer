import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LearnUse() {

    myArray = [
        {
            fields: {
                audiourl: "https://adagiafiles.s3.eu-west-1.amazonaws.com/audio/01.03d005cd-2021-4847-ad0e-db9b3fdb1ab9.mp3",
                id: 1,
                exercise: "die erste stufe. between friends"
            }
        }
    ]

    const store = async (key, value) => {
        try {
            const item = {
                value,
                timestamp: Date.now()
            }
            const stringItem = JSON.stringify(item)

            await AsyncStorage.setItem(key, JSON.stringify(item));
            console.log('learray', item)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        store('meinkey', myArray)
    }, []
    )


    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingLeft: 12,
    }
})

export default LearnUse;