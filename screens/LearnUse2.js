import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LearnUse2() {

    const [storageItems, setStorageItems] = useState([])
    const [checker, setChecker] = useState(false)

    // read storage and put in array
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('meinkey')
            if (value !== null) {
                const data = JSON.parse(value);
                // put data in array
                setStorageItems(data.value.records);

            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }
    useEffect(() => {
        getStoredData();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            {console.log('ich rendere', storageItems.length)}
            <View>
                {storageItems.length > 0 && storageItems.map((item) => (
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

export default LearnUse2;