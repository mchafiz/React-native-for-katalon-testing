import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageA from "./screen/PageA";
import PageB from "./screen/PageB";
import PageC from "./screen/PageC";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const IconComponent = ({ name, size, color }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Define icons for each tab based on route name
            if (route.name === "Page A") {
              iconName = focused ? "list" : "list";
            } else if (route.name === "Page B") {
              iconName = focused ? "list" : "list";
            } else if (route.name === "Page C") {
              iconName = focused ? "list" : "list";
            }

            // You can return any component here
            // Example: return <IconComponent name={iconName} size={size} color={color} />;
            return <IconComponent name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Page A" component={PageA} />
        <Tab.Screen name="Page B" component={PageB} />
        <Tab.Screen name="Page C" component={PageC} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Define your custom icon component here
const YourIconComponent = ({ name, size, color }) => {
  // return the appropriate icon based on the name prop
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
