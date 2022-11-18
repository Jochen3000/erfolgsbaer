import React from 'react';

const quiz = [
    {
        question: 'which is the biggest city',
        answerOptions: [
            { id: 1, answerText: 'Berlin', isCorrect: false },
            { id: 2, answerText: 'NY', isCorrect: false },
            { id: 3, answerText: 'London', isCorrect: false },
            { id: 4, answerText: 'Tokio', isCorrect: true },
        ]
    },
    {
        question: 'which is an italian dish',
        answerOptions: [
            { id: 1, answerText: 'sushi', isCorrect: false },
            { id: 2, answerText: 'schnitzel', isCorrect: false },
            { id: 3, answerText: 'spätzle', isCorrect: false },
            { id: 4, answerText: 'pizza', isCorrect: true },
        ]
    },
    {
        question: 'which contains alkohol',
        answerOptions: [
            { id: 1, answerText: 'juice', isCorrect: false },
            { id: 2, answerText: 'coke', isCorrect: false },
            { id: 3, answerText: 'wine', isCorrect: true },
            { id: 4, answerText: 'water', isCorrect: false },
        ]
    },
]


export default quiz;