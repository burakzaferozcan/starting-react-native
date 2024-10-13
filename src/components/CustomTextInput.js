import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomTextInput = ({
  title,
  isSecureText,
  handleChangeText,
  handleValue,
  handlePlaceholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{title}</Text>
      <TextInput
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleChangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  labelStyle: {
    textAlign: "justify",
    width: "100%",
    fontSize: 17,
    fontWeight: "bold",
    color: "#7E60BF",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "100%",
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: "center",
    color: "#433878",
    fontWeight: "bold",
    borderColor: "#E4B1F0",
  },
});
