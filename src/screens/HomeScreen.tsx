import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Control</Text>
            <View style={styles.cardsContainer}>
                <View style={styles.cardReceber}>
                    <Text style={styles.cardTitle}>Contas a Receber</Text>
                    <Text style={styles.cardValue}>R$ 0,00</Text>
                </View>
                <View style={styles.cardPagar}>
                    <Text style={styles.cardTitle}>Contas a Pagar</Text>
                    <Text style={styles.cardValue}>R$ 0,00</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },

    cardsContainer: {
        gap: 20
    },

    cardReceber: {
        backgroundColor: "#4CAF50",
        padding: 20,
        borderRadius: 10,
    },

    cardPagar: {
        backgroundColor: "#4CAF50",
        padding: 20,
        borderRadius: 10,
    },
    cardTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    cardValue: {
        color: "#fff",
        fontSize: 24,
        marginTop: 10
    }
});