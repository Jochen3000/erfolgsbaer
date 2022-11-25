import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function LearnUse() {

    const [myArray, setArray] = useState([
        { name: 'jo', id: '1' },
        { name: 'biff', id: '2' }
    ]);

    const [newItem, setNewItem] = useState({ name: 'micky', id: '3' })

    const updateVals = () => {
        setArray((oldarray) => [...oldarray, newItem])
    }

    return (
        <View style={styles.container}>
            {myArray.map((item) => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                </View>
            ))}
            <Button
                onPress={updateVals}
                title="Learn More" />
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