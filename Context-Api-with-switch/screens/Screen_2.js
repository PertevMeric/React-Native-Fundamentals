import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { ButtonContext } from "../store/context/button_context";

function Screen_2() {
  const btnContext = useContext(ButtonContext);
  const TextDecider = btnContext.btn
    ? "it is too bright here"
    : "turn on the lights please";
  return (
    <View
      style={[
        styles.Containers,
        btnContext.btn
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
