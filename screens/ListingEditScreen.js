import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import { object, string, number } from 'yup';

const validationSchema = object().shape({
    title: string().required().label("Titel"),
    price: number().required().positive().integer(),
    description: string(),
});

function ListingEditScreen() {
    return (
        <Formik
            initialValues={{ title: '', price: '', description: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
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
                    <Text style={{ color: 'red' }}>{errors.title}</Text>
                    <TextInput
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                        placeholder='price'
                        style={styles.input}
                        value={values.price}
                    />
                    <Text style={{ color: 'red' }}>{errors.price}</Text>
                    <TextInput
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        placeholder='description'
                        style={styles.input}
                        value={values.description}
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
    }
})

export default ListingEditScreen;