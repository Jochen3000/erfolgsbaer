import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LearnUse() {

    const [storageItems, setStorageItems] = useState([])
    const [checker, setChecker] = useState(false)

    // read storage and put in array
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('meinkey')
            if (value !== null) {
                const data = JSON.parse(value);
                // put data in array
                setStorageItems(data);

            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }
    useEffect(() => {
        getStoredData();
    }, []);

    useEffect(() => {
        setChecker(true);
    }, [storageItems]);


    console.log('STORAGE', checker && storageItems.value.records[0].fields.exercise);

    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            <Text>{checker && storageItems.value.records[0].fields.exercise}</Text>
            <View>
                {checker && storageItems.records.map((item) => (
                    <View key={item.fields.id}>
                        <Text>{item.fields.exercise}</Text>
                    </View>
                ))}
            </View>
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