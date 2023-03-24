import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen_1 from "./screens/Screen_1";

const BottomTab = createBottomTabNavigator();

export default function App() {
  return <Screen_1></Screen_1>;
}
