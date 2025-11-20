import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { questions } from "../src/data/questions";

export default function QuizScreen({ route, navigation }) {
  const { levelId } = route.params;

  const levelQuestions = questions[levelId];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = levelQuestions[index];

  function handleAnswer(option) {
    if (option === current.answer) {
      setScore(score + 1);
    }

    if (index + 1 < levelQuestions.length) {
      setIndex(index + 1);
    } else {
      navigation.navigate("Levels");
    }
  }

  return (
    <ScrollView style={{ padding: 20 }}>
              <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Pergunta {index + 1}/{levelQuestions.length}
      </Text>

      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        {current.question}
      </Text>

      {current.options.map((opt, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => handleAnswer(opt)}
          style={{
            backgroundColor: "#ddd",
            padding: 12,
            borderRadius: 8,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 18 }}>{opt}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
