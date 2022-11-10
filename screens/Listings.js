import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import Card from '../components/Card';

const products = [
    {
        id: 1,
        title: 'Jacke',
        price: '5 euro',
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Hose',
        price: '1 euro',
        image: require('../assets/couch.jpg'),
    },
    {
        id: 3,
        title: 'Hemd',
        price: '2 euro',
        image: require('../assets/chair.jpg'),
    },
]


function Listings() {
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        price={item.price}
                        img={item.image}
                    />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default Listings;