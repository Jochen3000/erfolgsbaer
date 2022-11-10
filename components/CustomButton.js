import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function CustomButton({ text, color }) {
    return (
        <View style={[styles.button, { backgroundColor: colors[color] }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 16,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 8,
    },
    text: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 16
    }
})