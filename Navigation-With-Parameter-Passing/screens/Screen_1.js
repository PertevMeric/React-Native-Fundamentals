import { Text, StyleSheet, SafeAreaView, TextInput } from "react-native";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";

function Screen_1({ navigation }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  return (
    <>
      <SafeAreaView style={[styles.Containers]}>
        <Text style={styles.aligner}>
          Hi from Screen 1! Please enter a number and press the button to
          navigate to second page.
        </Text>
        <TextInput
          style={styles.numberInput}
          value={enteredNumber}
          onChangeText={(enteredNumber) => {
            setEnteredNumber(enteredNumber);
          }}
        ></TextInput>
        <CustomButton
          functionToExecute={() => {
            navigation.navigate("Second Screen", {
              number: enteredNumber,
            });
          }}
        />
      </SafeAreaView>
    </>
  );
}
export default Screen_1;
const styles = StyleSheet.create({
  Containers: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  aligner: {
    textAlign: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 24,
    borderBottomColor: "#3213be",
    borderBottomWidth: 2,
    color: "#3a14e0",
    marginVertical: 3,
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
