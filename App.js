import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SignUp } from "./screens/SignUp";
import { Run } from "./screens/Run";
import { Records } from "./screens/Records";
import { Settings } from "./screens/Settings";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const BottomTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Run" component={Run} />
        <Tab.Screen name="Records" component={Records} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottomTab}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
