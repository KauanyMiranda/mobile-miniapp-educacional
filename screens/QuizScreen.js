import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";

export default function QuizScreen({ navigation, route }) {
  const { questions, phaseTitle } = route.params;

  const [questionList, setQuestionList] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [verified, setVerified] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [wrongQuestions, setWrongQuestions] = useState([]);

  const question = questionList[currentQuestion];
  const progress = (currentQuestion + 1) / questionList.length;

  function handleVerify() {
    if (selected === null) return;

    const correct = question.options[selected] === question.answer;
    setIsCorrect(correct);
    setVerified(true);

    if (!correct) {
      setWrongQuestions(prev => [...prev, question]);
    }
  }

  function handleNext() {
    setVerified(false);
    setSelected(null);

    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    if (wrongQuestions.length > 0) {
      // Reinicia só com as erradas
      setQuestionList(wrongQuestions);
      setWrongQuestions([]);
      setCurrentQuestion(0);
      return;
    }

    navigation.navigate("FinishScreen", { phaseTitle });
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.phaseTitle}>{phaseTitle}</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.questionText}>{question.text}</Text>

      {question.options.map((opt, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selected === index && styles.optionSelected,
            verified && opt === question.answer && styles.optionCorrect,
            verified && selected === index && opt !== question.answer && styles.optionWrong,
          ]}
          disabled={verified}
          onPress={() => setSelected(index)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={[
          styles.verifyButton,
          verified && !isCorrect && styles.buttonWrong,
          verified && isCorrect && styles.buttonCorrect,
        ]}
        onPress={verified ? handleNext : handleVerify}
      >
        <Text style={styles.verifyButtonText}>
          {verified ? "Continuar" : "Verificar"}
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
  },

  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#0CABA86B",
    borderRadius: 10,
    marginBottom: 20,
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
  },

  verifyButtonText: {
    color: "#FFF",
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
