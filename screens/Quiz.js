import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

import quiz from '../components/Questions';

function Quiz() {
    const [questionID, setQuestionID] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [resultScreen, setResultScreen] = useState(false);
    console.log("der resultscreen ist", resultScreen);

    // update the count of correct answers
    useEffect(() => {
        // action on update of movies
        console.log("correct", correctAnswerCount)
    }, [correctAnswerCount]);

    if (!resultScreen) {
        return (
            <View>
                <Text style={styles.headline}>Mein Quiz</Text>
                <Text style={styles.question}>{quiz[questionID].question}</Text>
                <View>
                    {quiz[questionID].answerOptions.map((answer) => (
                        <TouchableOpacity
                            style={styles.answers}
                            key={answer.id.toString()}
                            onPress={() => {
                                // check if answer is correct
                                if (answer.isCorrect == true) {
                                    setCorrectAnswerCount(correctAnswerCount + 1);
                                };

                                // go to next question
                                const nextQuestion = questionID + 1;
                                if (questionID < quiz.length - 1) {
                                    setQuestionID(nextQuestion);
                                } else {
                                    console.log('ende der liste');
                                    setResultScreen(true);

                                };
                            }}
                        >
                            <Text>
                                {answer.answerText}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    } else {
        return <View>
            <Text style={styles.headline}>Ergebnis</Text>
            <Text style={styles.question}>Richtige Antworten: {correctAnswerCount}</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    headline: {
        fontSize: 24,
    },
    question: {
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    answers: {
        borderColor: 'tomato',
        borderWidth: 2,
        paddingVertical: 10,
        paddingLeft: 8,
        marginVertical: 8,
    }
})

export default Quiz;