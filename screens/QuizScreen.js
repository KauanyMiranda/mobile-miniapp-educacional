import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from "react-native";

export default function QuizScreen({ route, navigation }) {
  const { questions: phaseQuestions, phaseTitle } = route.params;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const question = phaseQuestions[currentQuestionIndex];

  const handleSelectOption = (option) => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);
  };

  const handleContinue = () => {
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestionIndex + 1 < phaseQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Você concluiu a fase: ${phaseTitle}!`);
      navigation.goBack();
    }
  };

  const progress = (currentQuestionIndex + 1) / phaseQuestions.length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.phaseText}>{phaseTitle}</Text>

      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.questionText}>{question.text}</Text>

      {question.options.map((option, index) => {
        const isCorrect = option === question.answer;
        const isSelected = option === selectedOption;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              isSelected && isCorrect && styles.correct,
              isSelected && !isCorrect && styles.incorrect,
            ]}
            onPress={() => handleSelectOption(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        );
      })}

      {isAnswered && (
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>Continuar</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#015958",
    flexGrow: 1,
  },
  phaseText: {
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1,
  },
  progressBarBackground: {
    height: 12,
    backgroundColor: "#A8E6E5",
    borderRadius: 6,
    overflow: "hidden",
    marginBottom: 25,
  },
  progressBarFill: {
    height: 12,
    backgroundColor: "#008F8C",
  },
  questionText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  optionButton: {
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
  optionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  correct: {
    backgroundColor: "#0fc25dff",
  },
  incorrect: {
    backgroundColor: "#d42f2fff",
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: "#0CABA8", // tom mais leve
    paddingVertical: 15,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  continueText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
