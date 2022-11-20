import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

function QuizNew() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

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
                    <Text style={styles.headline}>Questions:</Text>
                    <FlatList
                        data={data.results}
                        renderItem={({ item }) => (
                            <Text style={styles.question}>{item.question}</Text>
                        )}
                    />
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