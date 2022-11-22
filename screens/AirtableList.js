import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

function AirtableList({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.airtable.com/v0/appmkw9T6kKIvJvbq/exercises?maxRecords=3&view=Grid%20view', {
            method: "GET",
            headers: { "Authorization": "Bearer keyHNf6pSow89oumN" }
        })
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        <View>
            {isLoading ? <Text>Loading...</Text> :
                (<View>
                    <Text style={styles.headline}>Exercises:</Text>

                    {
                        data.records.map((item) => (
                            <View key={item.fields.id}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('AirtableDetails', {
                                        itemObj: item.fields
                                    }
                                    )}>
                                    <Text style={styles.exercise}>{item.fields.exercise}</Text>
                                </TouchableOpacity>
                            </View>
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
    exercise: {
        paddingTop: 32,
        paddingBottom: 4,
    },
})

export default AirtableList