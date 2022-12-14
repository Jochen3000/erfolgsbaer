import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import useGetExercises from '../hooks/useGetExercises';
import authContext from '../auth/authContext';

function ExerciseList({ navigation }) {

    const { user, setUser } = useContext(authContext);
    const { storageItems = [], isLoading = true } = useGetExercises();

    return (
        <View>
            {isLoading ?
                <View>
                    <Text>Loading...</Text>
                </View>
                :
                (<View>
                    {user && <Text>Welcome {user}!</Text>}
                    <Text style={styles.headline}>Exercises:</Text>

                    {
                        storageItems.records.map((item) => (
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