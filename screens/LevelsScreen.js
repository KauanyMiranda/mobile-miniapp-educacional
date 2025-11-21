import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from "react-native";
import questions from "../src/data/questions";

export default function LevelsScreen({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const numColumns = 4;
  const spacing = 15; 
  const paddingHorizontal = 35; 
  const cardSize = (screenWidth - paddingHorizontal * 2 - spacing * (numColumns - 1)) / numColumns;

  return (
    <ScrollView contentContainerStyle={[ styles.container, { flexGrow: 1 }]}>
      <View style={styles.header}>
        <Text style={styles.title}>Níveis</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image 
            source={require('../assets/home.png')}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <View style={styles.grid}>
          {questions.slice(0, 8).map((phase, index) => (
            <TouchableOpacity
              key={phase.id || index}
              style={[
                styles.cardWrapper,
                {
                  width: cardSize,
                  height: cardSize,
                  marginRight: (index + 1) % numColumns === 0 ? 0 : spacing,
                  marginBottom: spacing,
                },
              ]}
              onPress={() =>
                navigation.navigate("Quiz", {
                  questions: phase.questions,
                  phaseTitle: phase.title,
                })
              }
            >
              <View style={styles.card}>
                <Text style={styles.cardText}>{phase.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#015958',
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 42, 
    fontWeight: "900",
    color: '#fff',
    letterSpacing: 1.5, 
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  backButton: {
    backgroundColor: "#015958",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16, 
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,  
  },
  cardsContainer: {
    backgroundColor: "#0CABA89B",
    marginTop: 35,
    padding: 15,
    borderRadius: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardWrapper: {
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: '#0FC2C0', 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    fontSize: 35,
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 1.5, 
    textShadowColor: 'rgba(0, 0, 0, 0.3)', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
});
