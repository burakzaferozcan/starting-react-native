import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setIsLoading, setPassword } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
  //! userSlice ieçrisindeki verilerib okunması
  const { email, password, isLoading } = useSelector((state) => state.user);

  //! userSLice içerisindeki yapıları kullanma veya veri gönderme
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login1.png")}
        style={styles.loginImage}
      />
      <Text style={styles.title}>WELCOME</Text>
      <CustomTextInput
        title="Email"
        isSecureText={false}
        handleChangeText={(text) => dispatch(setEmail(text))}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleChangeText={(text) => dispatch(setPassword(text))}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        handleOnPress={() => dispatch(setIsLoading(true))}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
      <CustomButton
        buttonText="Signup"
        buttonTextColor="#7E60BF"
        handleOnPress={() => navigation.navigate("SignUp")}
        buttonBackgroundColors={["#E4B1F0", "#FFE1FF"]}
      />
      {isLoading ? (
        <Loading changeIsLoading={() => dispatch(setIsLoading(false))} />
      ) : null}
    </View>
  );
};
export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  loginImage: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  title: {
    color: "#433878",
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
