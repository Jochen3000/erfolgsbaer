import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, createContext, useContext } from "react";
import authContext from '../auth/authContext';

function LearnChild() {
    const { user, setUser } = useContext(authContext);

    return (
        <View style={styles.container}>
            <Text> {user} </Text>
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

export default LearnChild;