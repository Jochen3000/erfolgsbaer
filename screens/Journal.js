import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Journal() {

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
    };

    const storeData = async (reviews) => {
        try {
            const jsonValue = JSON.stringify(reviews)
            await AsyncStorage.setItem('journalStored', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    return (
        <Formik
            initialValues={{ title: '', description: '' }}
            onSubmit={storeData}
        >
            {({ handleChange, handleSubmit, handleBlur, setFieldTouched, errors, values }) => (
                <View style={styles.container}>
                    <TextInput
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        placeholder='title'
                        style={styles.input}
                        value={values.title}
                    />
                    <Text style={{ color: 'red' }}>{errors.price}</Text>
                    <TextInput
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        placeholder='description'
                        style={styles.inputarea}
                        value={values.description}
                        multiline={true}
                        numberOfLines={4}
                    />
                    <Text style={{ color: 'red' }}>{errors.description}</Text>
                    <Button onPress={handleSubmit} title="Post" />
                </View>
            )}
        </Formik>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30,
    },
    input: {
        borderBottomColor: '#ccc',
        color: 'grey',
        borderBottomWidth: 1,
        fontSize: 18,
        marginVertical: 12,
        paddingLeft: 8,
    },
    inputarea: {
        borderBottomColor: '#ccc',
        color: 'grey',
        borderBottomWidth: 1,
        height: 120,
        fontSize: 18,
        marginVertical: 12,
        paddingLeft: 8,
    },
})

export default Journal;