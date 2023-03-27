import { Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ functionToExecute }) {
  return (
    <Pressable onPress={functionToExecute}>
      <Text style={styles.buttonText}>GO!</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonText: {
    padding: 8,
    paddingHorizontal: 10,
    marginTop: 10,
    fontWeight: "bold",
    color: "blue",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 4,
  },
});
