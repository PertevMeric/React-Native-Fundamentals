import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons"; //https://icons.expo.fyi/AntDesign/earth

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: "#dbd3ef",
          drawerActiveTintColor: "#28049f",
          drawerStyle: { backgroundColor: "#ffffff" },
          headerStyle: { backgroundColor: "#4113da" },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Welcome!"
          component={WelcomeScreen}
          options={{
            drawerLabel: "Welcome Screen",
            drawerIcon: (
              { color, size } //color and size provided automatically
            ) => <AntDesign name="home" size={size} color={color} />,
          }}
        />
        <Drawer.Screen
          name="User"
          component={UserScreen}
          options={{
            drawerLabel: "User Screen",
            drawerIcon: (
              { color, size } //color and size provided automatically
            ) => <AntDesign name="user" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
