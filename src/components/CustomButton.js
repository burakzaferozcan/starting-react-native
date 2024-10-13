import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";

const CustomButton = ({
  buttonText,
  handleOnPress,
  buttonTextColor,
  buttonBackgroundColors,
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonStyle,
        {
          backgroundColor: pressed
            ? buttonBackgroundColors[0]
            : buttonBackgroundColors[1],
        },
      ]}
      onPress={() => handleOnPress()}
    >
      <Text style={[{ color: buttonTextColor }, styles.buttonTextStyle]}>
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: "center",
  },
  buttonTextStyle: {
    fontWeight: "500",
    fontSize: 17,
  },
});
