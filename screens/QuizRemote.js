import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

const myQuestions = () => {
    console.log('frage: ', item.question)
}

function QuizRemote() {

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
            .then((response) => { return response.json(); })
            .then((data) => {
                data.map(myQuestions);
                return (myQuestions)
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