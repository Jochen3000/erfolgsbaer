import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function JournalList() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [journalEntries, setJournalEntries] = useState([]);

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('journalStored')
            if (value !== null) {
                // value previously stored
                console.log('hey daten', value)
            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }

    // hier dann lokal laden
    useEffect(() => {
        setLoading(false);
        getData();
    }, []);

    return (

        <View>
            {isLoading ? <Text>Loading...</Text> :
                (<View>
                    <Text style={styles.headline}>Journal List:</Text>

                    {
                        journalEntries.map((item) => (
                            <View key={item.id}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
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
    title: {
        paddingTop: 20,
        paddingBottom: 4,
        fontWeight: '700',
    },
    description: {
        paddingBottom: 20,
    },
})

export default JournalList