import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  const { width } = Dimensions.get("window");
  const buttonWidth = width * 0.8;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CodeRush</Text>

      <TouchableOpacity
        style={[styles.mainButton, { width: buttonWidth }]}
        onPress={() => navigation.navigate("Levels")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#daf2f1ff',
    paddingVertical: 40,
  },
  title: {
    fontSize: 60,
    fontWeight: "900",
    color: "#015958", 
    textAlign: "center",
    marginBottom: 50,
    letterSpacing: 1.5,
    textShadowColor: "rgba(0,0,0,0.2)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  mainButton: {
    backgroundColor: "#008F8C",
    paddingVertical: 18,
    borderRadius: 20,
    marginBottom: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "800",
    color: "#fff",
  },
});
