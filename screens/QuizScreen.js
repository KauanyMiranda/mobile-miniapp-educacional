import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Animated,
} from "react-native";
import { useState, useRef } from "react";

export default function QuizScreen({ navigation, route }) {
  const { questions } = route.params;

  const [questionList, setQuestionList] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [verified, setVerified] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [reviewing, setReviewing] = useState(false);

  const [showCorrectionModal, setShowCorrectionModal] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const question = questionList[currentQuestion];
  const progress = (currentQuestion + 1) / questionList.length;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  function openModal(setter) {
    setter(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  function closeModal(setter) {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start(() => setter(false));
  }

  function handleVerify() {
    if (selected === null) return;

    const correct = question.options[selected] === question.answer;
    setIsCorrect(correct);
    setVerified(true);

    if (!correct && !reviewing) {
      setWrongQuestions((prev) => [...prev, question]);
    }
  }

  function handleNext() {
    setVerified(false);
    setSelected(null);

    if (currentQuestion < questionList.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    if (!reviewing && wrongQuestions.length > 0) {
      openModal(setShowCorrectionModal);
      return;
    }

    openModal(setShowFinishModal);
    setReviewing(false);
  }

  function startCorrection() {
    closeModal(setShowCorrectionModal);
    setQuestionList(wrongQuestions);
    setWrongQuestions([]);
    setCurrentQuestion(0);
    setReviewing(true);
  }

  function finishQuiz() {
    closeModal(setShowFinishModal);
    navigation.navigate("Levels");
  }

  function exitQuiz() {
    closeModal(setShowExitModal);
    navigation.navigate("Levels");
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar}>
        <View style={styles.progressBarBackground}>
          <View
            style={[styles.progressBarFill, { width: `${progress * 100}%` }]}
          />
        </View>

        <TouchableOpacity onPress={() => openModal(setShowExitModal)}>
          <Text style={styles.exitButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>

        <Text style={styles.questionText}>{question.text}</Text>

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

      <Modal transparent visible={showCorrectionModal}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalBox, { opacity: fadeAnim }]}>
            <Text style={styles.modalTitle}>Vamos corrigir!</Text>
            <Text style={styles.modalSubtitle}>
              Você errou algumas perguntas. Vamos tentar novamente!
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={startCorrection}
            >
              <Text style={styles.modalButtonText}>Refazer erros</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      <Modal transparent visible={showFinishModal}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalBox, { opacity: fadeAnim }]}>
            <Text style={styles.modalTitle}>Parabéns!</Text>
            <Text style={styles.modalSubtitle}>
              Você completou todas as perguntas!
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={finishQuiz}>
              <Text style={styles.modalButtonText}>Voltar aos níveis</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      <Modal transparent visible={showExitModal}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalBox, { opacity: fadeAnim }]}>
            <Text style={styles.modalTitle}>Tem certeza?</Text>
            <Text style={styles.modalSubtitle}>
              Você deseja sair da fase e voltar aos níveis?
            </Text>

            <TouchableOpacity style={styles.modalButton} onPress={exitQuiz}>
              <Text style={styles.modalButtonText}>Sim, sair</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: "#ccc" }]}
              onPress={() => closeModal(setShowExitModal)}
            >
              <Text style={[styles.modalButtonText, { color: "#333" }]}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#daf2f1ff',
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: -20
  },
  exitButton: {
    fontSize: 32,
    fontWeight: "900",
    color: "#015958",
  },
  progressBarBackground: {
    flex: 1,
    height: 14,
    backgroundColor: "#0CABA830",
    borderRadius: 20,
    marginRight: 15,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#0FC2C0",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    backgroundColor: "#0CABA8",
    paddingVertical: 18,
    paddingHorizontal: 14,
    borderRadius: 16,
    elevation: 6,
  },
  option: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#0CABA8",
    elevation: 6,
  },
  optionSelected: {
    backgroundColor: "#C0EFEF",
  },
  optionCorrect: {
    backgroundColor: "#C8F7C5",
    borderColor: "#4CAF50",
  },
  optionWrong: {
    backgroundColor: "#c99b96ff",
    borderColor: "#F44336",
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    elevation: 10,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: "900",
    color: "#015958",
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 25,
  },
  modalButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 14,
    backgroundColor: "#0CABA8",
    alignItems: "center",
    marginBottom: 12,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
