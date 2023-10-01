/** @format */

import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./screens/Onboarding";
import Vpn from "./screens/Vpn";
import PriceOptionModal from "./screens/PriceOption";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Hide header for all screens by default
        }}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Vpn" component={Vpn} />
        <Stack.Screen
          name="PriceOptionModal"
          component={PriceOptionModal}
          options={{
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
