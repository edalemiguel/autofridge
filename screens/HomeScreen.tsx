
import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
    const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: "center", alignItems: "center" },
        text: { fontSize: 20, fontWeight: "bold" },
    });
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}