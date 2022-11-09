import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

export default function WelcomeScreen() {

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.bgimage}>
                <View style={styles.contentcontainer}>
                    <Image source={require('../assets/logo-red.png')} style={styles.image} />
                    <Text style={styles.text}>Sell what you don't need</Text>
                </View>
                <View style={styles.footercontainer}>
                    <View style={styles.footerbox} />
                    <View style={[styles.footerbox, styles.box2]} />
                </View>
            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgimage: {
        flex: 1,
    },
    contentcontainer: {
        marginTop: 100,
        justifyContent: "top",
        alignItems: "center",
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,

    },
    text: {
        fontWeight: "bold",
    },
    footercontainer: {

    },
    footerbox: {
        backgroundColor: "#fc5c65",
        height: 60,
        width: '100%',
    },
    box2: {
        backgroundColor: "#4ECDC4",
    }
});


