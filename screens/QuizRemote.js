import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

function QuizRemote() {

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
            .then((response) => { return response.json(); })
            .then((data) => {
                let questions = data;
                console.log('meine fragen', questions)
            })
    }, []);


    return (
        <View>
            <Text>
                Huhu
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default QuizRemote;