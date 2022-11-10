import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function Card({ title, price, img }) {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.img} />
            <Text style={styles.subtitle}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: '30',
        marginBottom: 32,
    },
    img: {
        width: '100%',
        height: 300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    subtitle: {
        paddingLeft: 16,
        paddingTop: 8
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        padding: 16


    }
})

export default Card;