import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./authStack";
import UserStack from "./userStack";
import { useSelector } from "react-redux";
import app from "../../firebaseConfig";

const RootNavigation = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <NavigationContainer>
      {!isAuth ? <AuthStack /> : <UserStack />}
    </NavigationContainer>
  );
};

export default RootNavigation;
