import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import JournalEntries from '../components/JournalEntries';
import useGetLocalStorage from '../hooks/useGetLocalStorage';

function LearnUse() {


    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            <JournalEntries />
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
