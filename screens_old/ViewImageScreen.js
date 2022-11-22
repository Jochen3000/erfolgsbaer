import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function WelcomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <MaterialCommunityIcons name="close" size={32} color="white" />
                <MaterialCommunityIcons name="trash-can" size={32} color="white" />
            </View>
            <Text style={styles.text}>Sell what you don't need</Text>
            <View style={styles.header}>
                <View style={styles.box} />
                <View style={[styles.box, styles.box2]} />
            </View>
            <Image source={require('../assets/chair.jpg')} style={styles.image} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    top: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    image: {
        flex: 1,
        width: "100%",
        resizeMode: 'contain',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
});

