import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login2.png")}
        style={styles.signupImage}
      />
      <Text style={styles.title}>Sign Up</Text>
      <CustomTextInput
        title={"Name"}
        isSecureText={false}
        handlePlaceholder={"Enter Your Name"}
        handleChangeText={setName}
        handleValue={name}
      />
      <CustomTextInput
        title={"Email"}
        isSecureText={false}
        handlePlaceholder={"Enter Your Email"}
        handleChangeText={setEmail}
        handleValue={email}
      />
      <CustomTextInput
        title={"Password"}
        isSecureText={true}
        handlePlaceholder={"Enter Your Password"}
        handleChangeText={setPassword}
        handleValue={password}
      />
      <CustomButton
        buttonText="Sign Up"
        handleOnPress={() => setIsLoading(true)}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.paragraph}>
          Already have an account? <Text style={styles.span}>Login</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE1FF",
  },
  title: {
    color: "#433878",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  signupImage: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  paragraph: {
    color: "#7E60BF",
  },
  span: {
    fontWeight: "900",
    textDecorationLine: "underline",
  },
});
