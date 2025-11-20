import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>CodeLingo</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Levels")}
          style={{
            marginTop: 30,
            backgroundColor: "#4CAF50",
            padding: 15,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Começar</Text>
        </TouchableOpacity>

        {/* Coloque itens longos só pra testar */}
        <View style={{ height: 1000, width: "100%", backgroundColor: "#eee", marginTop: 20 }} />
      </View>
    </ScrollView>
  );
}
