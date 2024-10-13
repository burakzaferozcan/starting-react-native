import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Loading from "../components/Loading";
import CustomTextInput from "../components/CustomTextInput";
import CustomButton from "../components/CustomButton";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
        handeOnChangeText={setEmail}
        handleValue={email}
        handlePlaceholder="Enter Your Email"
      />
      <CustomTextInput
        title="Password"
        isSecureText={true}
        handeOnChangeText={setPassword}
        handleValue={password}
        handlePlaceholder="Enter Your Password"
      />
      <CustomButton
        buttonText="Login"
        handleOnPress={() => setIsLoading(true)}
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
        <Loading changeIsLoading={() => setIsLoading(false)} />
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
