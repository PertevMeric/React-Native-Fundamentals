import { Text, StyleSheet, SafeAreaView, Switch } from "react-native";
import CustomButton from "../Components/CustomButton";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchToFalse, switchToTrue } from "../store/redux/buttonSlice";

function Screen_1({ navigation }) {
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isEnabled, setIsEnabled] = useState(false);
  const buttonState = useSelector((state) => state.default.value);
  const dispatch = useDispatch();
  /*nction handleSwitchToTrue() {
    dispatch(switchToFalse());
  }
  function handleSwitchToFalse() {
    dispatch(switchToTrue());
  }
*/
  function handleSwitchOverall() {
    if (buttonState) {
      dispatch(switchToFalse());
    } else {
      dispatch(switchToTrue());
    }
  }

  return (
    <>
      <SafeAreaView style={[styles.Containers]}>
        <Text style={styles.aligner}>
          Please switch on or off then press 'see results'
        </Text>
        <Switch
          style={{ marginTop: 10, marginBottom: 20 }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            toggleSwitch();
          }}
          onChange={handleSwitchOverall}
          value={buttonState}
        />
        <CustomButton
          functionToExecute={() => {
            navigation.navigate("Second Screen");
          }}
        >
          see results
        </CustomButton>
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
