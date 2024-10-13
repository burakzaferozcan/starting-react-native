import React from "react";
import { LoginPage, SignupPage } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={LoginPage} name="Login" />
      <Stack.Screen component={SignupPage} name="SignUp" />
    </Stack.Navigator>
  );
};
export default AuthStack;
