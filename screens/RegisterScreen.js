import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { TextInput } from 'react-native';
import { Button } from 'react-native';
import colors from '../config/colors';

function RegisterScreen() {
    return (
        <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        placeholder='your name'
                        style={styles.input}
                        value={values.name}
                    />
                    <TextInput
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        placeholder='your e-mail'
                        style={styles.input}
                        value={values.email}
                    />
                    <TextInput
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        placeholder='password'
                        style={styles.input}
                        value={values.password}
                    />
                    <Button onPress={handleSubmit} title="Register" />
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

export default RegisterScreen;