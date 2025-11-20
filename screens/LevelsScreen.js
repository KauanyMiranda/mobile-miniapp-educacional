import { View, ScrollView, Text, TouchableOpacity } from "react-native";

const levels = [
  { id: 1, title: "Componentes Básicos" },
  { id: 2, title: "JSX" },
  { id: 3, title: "Props" },
  { id: 4, title: "State" },
  { id: 5, title: "Hooks" },
  { id: 6, title: "Estilos" },
  { id: 7, title: "Eventos" },
  { id: 8, title: "Navegação" },
  { id: 9, title: "APIs Nativas" },
  { id: 10, title: "API Rest" },
];

export default function LevelsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 20 }}>
        Fases
      </Text>

      {levels.map((lvl) => (
        <TouchableOpacity
          key={lvl.id}
          style={{
            backgroundColor: "#eee",
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("Quiz", { levelId: lvl.id })}
        >
          <Text style={{ fontSize: 18 }}>{lvl.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}