import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import UserStack from "./userStack";

const RootNavigation = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
