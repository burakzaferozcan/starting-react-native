import React from "react";
import RootNavigation from "./src/navigation/rootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
const UserStack = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
export default UserStack;
