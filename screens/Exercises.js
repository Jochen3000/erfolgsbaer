import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ExerciseDetails from './ExerciseDetails';
import ExerciseList from './ExerciseList';

function Exercises() {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="ExerciseList" component={ExerciseList} />
                <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
    }
})

export default Exercises;