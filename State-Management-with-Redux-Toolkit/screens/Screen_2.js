import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function Screen_2() {
  const buttonState = useSelector((state) => state.default.value);
  const TextDecider = buttonState
    ? "it is too bright here"
    : "turn on the lights please";
  return (
    <View
      style={[
        styles.Containers,
        buttonState
          ? { backgroundColor: "#81b0ff" }
          : { backgroundColor: "#3e3e3e" },
      ]}
    >
      <Text style={styles.aligner}>{TextDecider}</Text>
    </View>
  );
}
export default Screen_2;
const styles = StyleSheet.create({
  Containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  aligner: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
