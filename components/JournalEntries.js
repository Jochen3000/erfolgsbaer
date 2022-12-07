import React from 'react';
import { View, Text } from 'react-native';

import useGetLocalJournal from '../hooks/useGetLocalJournal';

function JournalEntries() {

    const { storageItems, timeStamp } = useGetLocalJournal()

    console.log('yo', storageItems);
    console.log('yo', timeStamp);



    return (
        <View>
            <Text>Daten</Text>
            <View>
                {storageItems.length > 0 && storageItems.map((item) => (
                    < View key={item.fields.id} >
                        <Text>{item.fields.exercise}

                        </Text>
                    </View>
                ))}
            </View>
        </View >
    );
}

export default JournalEntries;