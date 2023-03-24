import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";

function Screen_1() {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [userEnteredNineteen, setUserEnteredNineteen] = useState(false);
  useEffect(() => {
    if (enteredNumber == 19) {
      setUserEnteredNineteen(true);
    } else {
      setUserEnteredNineteen(false);
    }
  }, [enteredNumber]);
  return (
    <>
      <SafeAreaView style={[styles.Containers]}>
        <Text style={styles.upperTexts}>Please Enter a text number here:</Text>
        <TextInput
          style={styles.numberInput}
          value={enteredNumber}
          onChangeText={(enteredNumber) => {
            setEnteredNumber(enteredNumber);
          }}
        ></TextInput>
        <View style={styles.Containers}>
          <Text style={styles.upperTexts}>You Entered: </Text>
          <Text style={styles.numberShown}>{enteredNumber}</Text>
          <Text style={styles.upperTexts}> Did you entered 19 as a value?</Text>
          <Text style={styles.numberShown}>
            {userEnteredNineteen.toString()}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}
export default Screen_1;
const styles = StyleSheet.create({
  Containers: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },

  upperTexts: {
    fontWeight: "bold",
    color: "#eb1064",
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
  numberShown: {
    height: 50,
    width: 60,
    fontSize: 24,
    color: "#3a14e0",
    fontWeight: "bold",
    alignItems: "center",
    textAlign: "center",
  },
});
