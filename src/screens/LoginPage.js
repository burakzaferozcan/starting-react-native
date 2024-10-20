import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading, login, autoLogin } from "../redux/userSlice";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //! userSlice ieçrisindeki verilerib okunması
  const { isLoading, error } = useSelector((state) => state.user);

  //! userSLice içerisindeki yapıları kullanma veya veri gönderme
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoLogin());
  }, []);
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
        handleChangeText={(text) => setEmail(text.toLowerCase())}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handleChangeText={(text) => setPassword(text)}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
      <CustomButton
        buttonText="Login"
        handleOnPress={() => dispatch(login({ email, password }))}
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
  errorMessage: {
    color: "red",
    fontWeight: "700",
  },
});
