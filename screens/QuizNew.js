import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

function QuizNew() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        <View>
            {isLoading ? <Text>Loading...</Text> :
                (<View>
                    <Text style={styles.headline}>Question:</Text>
                    <Text style={styles.headline}>{data.results[0].question}</Text>

                    {
                        data.results[0].incorrect_answers.map((item) => (
                            <Text>{item}</Text>
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
        paddingVertical: 16,
    },
    question: {
        paddingVertical: 8,
    }
})

export default QuizNew