import { View, Text, StyleSheet } from "react-native";

function Screen_2({ route }) {
  const number = route.params.number;
  return (
    <View style={styles.Containers}>
      <Text style={styles.aligner}>
        Hi from the second screen! I got the value of : {number}
      </Text>
    </View>
  );
}

export default Screen_2;

const styles = StyleSheet.create({
  Containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aligner: {
    textAlign: "center",
  },
});
