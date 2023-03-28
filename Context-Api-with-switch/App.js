import Screen_1 from "./screens/Screen_1";
import Screen_2 from "./screens/Screen_2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ButtonContextProvider from "./store/context/button_context";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <ButtonContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="First Screen" component={Screen_1} />
          <Stack.Screen name="Second Screen" component={Screen_2} />
        </Stack.Navigator>
      </NavigationContainer>
    </ButtonContextProvider>
  );
}
