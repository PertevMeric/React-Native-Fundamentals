import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";

function Screen_1() {
  const [enteredNumber, setEnteredNumber] = useState(null);
  const [initialElements, setInitialElement] = useState([]);
  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, increment] = useState(null);

  const addElement = () => {
    var newArray = [...initialElements, { id: idx, text: enteredNumber }];
    increment(idx + 1);
    setExampleState(newArray);
    setInitialElement(newArray);
  };

  return (
    <>
      <SafeAreaView style={[styles.Containers]}>
        <Text style={styles.aligner}>
          Please enter values then press 'add new element'
        </Text>
        <TextInput
          style={styles.numberInput}
          value={enteredNumber}
          onChangeText={(enteredNumber) => {
            setEnteredNumber(enteredNumber);
          }}
        ></TextInput>
        <View style={styles.Containers}>
          <FlatList
            keyExtractor={(item) => item.id}
            data={exampleState}
            renderItem={(item) => <Text>{item.item.text}</Text>}
          />
          <CustomButton functionToExecute={addElement}>
            add new element
          </CustomButton>
        </View>
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
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
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
  flatlistStyle: {
    height: 200,
  },
});
