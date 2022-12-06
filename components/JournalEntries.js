import React from 'react';
import { View, Text } from 'react-native';
import useGetLocalJournal from '../hooks/useGetLocalJournal';

function JournalEntries() {

    const storageItems = useGetLocalJournal()

    return (
        <View>
            <Text>HOHO</Text>
            {storageItems.length > 0 && storageItems.map((item) => (
                <View key={item.id}>
                    <Text>{item.title}</Text>
                </View>
            ))}
        </View>
    );
}

export default JournalEntries;