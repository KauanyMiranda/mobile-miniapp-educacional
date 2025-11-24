import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { ScrollView } from "react-native-web";

export default function QuizScreen({ navigation, route }) {
  const { questions, phaseTitle } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [verified, setVerified] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const question = questions[currentQuestion];

  const progress = (currentQuestion + 1) / questions.length; // 🔥 BARRA DE PROGRESSO

  function handleVerify() {
    if (selected === null) return;

    const correct = question.options[selected] === question.answer;
    setIsCorrect(correct);
    setVerified(true);
  }

  function handleNext() {
    setVerified(false);
    setSelected(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigation.navigate("FinishScreen", { phaseTitle });
    }
  }

  return (
    <ScrollView style={styles.container}>
      
      {/* título da fase */}
      <Text style={styles.phaseTitle}>{phaseTitle}</Text>

      {/* 🔥 BARRA DE PROGRESSO */}
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      {/* texto da pergunta */}
      <Text style={styles.questionText}>{question.text}</Text>

      {/* opções */}
      {question.options.map((opt, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selected === index && styles.optionSelected,
            verified && opt === question.answer && styles.optionCorrect,
            verified &&
              selected === index &&
              opt !== question.answer &&
              styles.optionWrong,
          ]}
          disabled={verified}
          onPress={() => setSelected(index)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      {/* botão verificar / continuar */}
      <TouchableOpacity
        style={[
          styles.verifyButton,
          verified && !isCorrect && styles.buttonWrong,
          verified && isCorrect && styles.buttonCorrect,
        ]}
        onPress={verified ? handleNext : handleVerify}
      >
        <Text style={styles.verifyButtonText}>
          {verified ?  "Continuar" : "Verificar"}
        </Text>
      </TouchableOpacity>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#015958",
    flexGrow: 1,
  },

  phaseTitle: {
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1,
  },

  /* 🔥 ESTILO DA BARRA DE PROGRESSO */
  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#0CABA86B",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    backgroundColor: "#0FC2C0",
  },

  questionText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },

  option: {
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#66a2a1ff",
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  optionSelected: {
    backgroundColor: "#d0d0d0",
  },

  optionCorrect: {
    backgroundColor: "#4CAF50",
  },

  optionWrong: {
    backgroundColor: "#F44336",
  },

  verifyButton: {
    marginTop: 20,
    backgroundColor: "#0CABA8",
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },

  verifyButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonCorrect: {
    backgroundColor: "#4CAF50",
  },

  buttonWrong: {
    backgroundColor: "#F44336",
  },
});
