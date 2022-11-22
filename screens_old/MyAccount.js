import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function MyAccount() {
    return (
        <View style={styles.account}>
            <View style={styles.profilebox}>
                <Image source={require('../assets/mosh.jpg')} style={styles.profile} />
                <View>
                    <Text style={styles.name}>Mosh</Text>
                    <Text>Hallo</Text>
                </View>
            </View>
            <View style={styles.iconbox}>
                <View style={styles.icon1}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
                </View>
                <Text style={styles.name}>My listings</Text>
            </View>
            <View style={styles.iconbox}>
                <View style={styles.icon2}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
                </View>
                <Text style={styles.name}>My messages</Text>
            </View>
            <View style={styles.iconbox}>
                <View style={styles.icon3}>
                    <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
                </View>
                <Text style={styles.name}>Logout</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    account: {
        width: '100%',
    },
    profilebox: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 16,
        marginBottom: 32,
    },
    iconbox: {
        flexDirection: 'row',
        marginTop: 8,
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 16,
        paddingLeft: 16,
    },
    icon1: {
        backgroundColor: colors.primary,
        marginRight: 8,
        padding: 8,
        borderRadius: 100,
    },
    icon2: {
        backgroundColor: colors.secondary,
        marginRight: 8,
        padding: 8,
        borderRadius: 100,
    },
    icon3: {
        backgroundColor: '#ffe66d',
        marginRight: 8,
        padding: 8,
        borderRadius: 100,
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

export default MyAccount;