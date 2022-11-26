import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LearnUse() {

    // declare arrays
    const [myStorageVals, setMyStorageVals] = useState('init');
    const [myArray, setArray] = useState([
        { title: 'yesterday all my trouble', id: '1' },
        { title: '99 red balloons', id: '2' }
    ]);

    // write data
    const storeData = async () => {
        try {
            const jsonValue = JSON.stringify(myArray)
            await AsyncStorage.setItem('storageJournalEntry', jsonValue)
        } catch (e) {
            // saving error
            console.log('saving problem')
        }
    }
    useEffect(() => {
        storeData();
    }, []);

    // read storage and put in variable
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('storageJournalEntry')
            if (value !== null) {
                const data = JSON.parse(value);
                // put data in array
                setMyStorageVals(value);
            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }
    useEffect(() => {
        getStoredData();
    }, []);
    console.log('meine Werte', myStorageVals)
    return (
        <View style={styles.container}>
            <Text>Hallo</Text>
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