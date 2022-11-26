import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Journal() {

    const [storageItems, setStorageItems] = useState([])

    // read storage and put in array
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('entryStored2')
            if (value !== null) {
                const data = JSON.parse(value);
                // put data in array
                setStorageItems(data);
            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }
    useEffect(() => {
        getStoredData();
    }, []);

    // Append new entry to array
    const updateVals = (vals) => {
        setStorageItems((oldarray) => [...oldarray, {
            title: vals.title,
            id: Math.random().toString()
        }])
    }

    // write array to asynch storage
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('entryStored2', JSON.stringify(storageItems))
        } catch (e) {
            // saving error
            console.log('cant save');
        }
    }

    useEffect(() => {
        storeData();
    }, [storageItems]);

    console.log('meine daten', storageItems);
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ title: '', description: '' }}
                onSubmit={updateVals}
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
            <View>
                {storageItems.map((item) => (
                    <View key={item.id}>
                        <Text>{item.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 30,
        paddingLeft: 12,
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