import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Journal() {

    // const storeData = async (reviews) => {
    //     try {
    //         const jsonValue = JSON.stringify(reviews)
    //         await AsyncStorage.setItem('journalStored', jsonValue)
    //     } catch (e) {
    //         // saving error
    //     }
    // }

    const [myArray, setArray] = useState([
        { title: 'jo is here', id: '1' },
        { title: 'biff is here', id: '2' }
    ]);

    // const [newItem, setNewItem] = useState({ title: 'micky is here', id: '3' })

    const updateVals = (vals) => {
        setArray((oldarray) => [...oldarray, {
            title: vals.title,
            id: Math.random().toString()
        }])
    }

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
                {myArray.map((item) => (
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