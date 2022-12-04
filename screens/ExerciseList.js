import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

function ExerciseList({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [storageItems, setStorageItems] = useState([]);

    useEffect(() => {
        getStoredData();
    }, []);

    // get stored data
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('meinkey')
            if (value !== null) {
                const data = await JSON.parse(value);
                // check valid
                const now = dayjs();
                const storedTime = dayjs(data.timestamp);
                const isExpired = now.diff(storedTime, 'hour') > 24;

                // put data in array or fetch new data
                if (!isExpired) {
                    setStorageItems(data.value);
                    setLoading(false);
                } else {
                    console.log('EXPIRED? Need remote', isExpired)
                    getRemoteData();
                }
            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }

    // get remote data
    const getRemoteData = () => {
        fetch('https://api.airtable.com/v0/appmkw9T6kKIvJvbq/exercises?maxRecords=3&view=Grid%20view', {
            method: "GET",
            headers: { "Authorization": "Bearer keyHNf6pSow89oumN" }
        })
            .then((response) => response.json())
            .then((json) => setStorageItems(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    // save latest data to cache
    // useEffect(() => {
    //     const store = async (key, value) => {
    //         try {
    //             const item = {
    //                 value,
    //                 timestamp: Date.now()
    //             }
    //             const stringItem = JSON.stringify(item)
    //             await AsyncStorage.setItem(key, JSON.stringify(item));
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     store('meinkey', data)
    // }, [data]
    // )

    return (

        <View>
            {isLoading ?
                <View>
                    <Text>Loading...</Text>
                </View>
                :
                (<View>
                    <Text style={styles.headline}>Exercises:</Text>

                    {
                        storageItems.records && storageItems.records.map((item) => (
                            <View key={item.fields.id}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('ExerciseDetails', {
                                        itemObj: item.fields
                                    }
                                    )}>
                                    <Text style={styles.exercise}>{item.fields.exercise}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }

                </View>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    headline: {
        fontSize: 24,
        paddingVertical: 8,
    },
    exercise: {
        paddingTop: 20,
        paddingBottom: 4,
    },
})

export default ExerciseList