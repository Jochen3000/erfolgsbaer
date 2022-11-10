import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import colors from '../config/colors';

function ListingsDetails({ title, price, img }) {
    return (
        <View style={styles.card}>
            <Image source={img} style={styles.img} />
            <Text style={styles.subtitle}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.profilebox}>
                <Image source={require('../assets/mosh.jpg')} style={styles.profile} />
                <View>
                    <Text style={styles.name}>Mosh</Text>
                    <Text>Hallo</Text>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        width: '100%',
    },
    img: {
        width: '100%',
        height: 300,
    },
    subtitle: {
        paddingLeft: 16,
        paddingTop: 8
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        padding: 16
    },
    profilebox: {
        flexDirection: 'row',
        marginTop: 20
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginRight: 16,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
    }
})

export default ListingsDetails;