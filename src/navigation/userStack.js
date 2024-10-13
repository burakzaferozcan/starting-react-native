import React from "react";
import { HomePage, ProfilePage } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const UserStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen component={HomePage} name="Home" />
      <Stack.Screen component={ProfilePage} name="Profile" />
    </Stack.Navigator>
  );
};
export default UserStack;
