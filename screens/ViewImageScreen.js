import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

export default function WelcomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
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
    image: {
        flex: 1,
        width: "100%",
        resizeMode: 'contain',
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        margin: 16
    },
    box2: {
        backgroundColor: "red",
    },
});

