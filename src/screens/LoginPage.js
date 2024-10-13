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
      <Text style={styles.labelStyle}>Email</Text>
      <TextInput
        inputMode="email"
        placeholder="Enter Your Email"
        style={styles.textInputStyle}
        onChangeText={setEmail}
        value={email}
      />
      <Text style={styles.labelStyle}>Password</Text>
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.textInputStyle}
        onChangeText={setPassword}
        value={password}
      />
      <Pressable
        style={({ pressed }) => [
          styles.buttonStyle,
          {
            backgroundColor: pressed ? "#433878" : "#7E60BF",
          },
        ]}
        onPress={() => setIsLoading(true)}
      >
        <Text style={styles.buttonTextStyle}>Login</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          styles.buttonStyle,
          {
            backgroundColor: pressed ? "#E4B1F0" : "#FFE1FF",
          },
        ]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signupButtonTextStyle}>Signup</Text>
      </Pressable>
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
  labelStyle: {
    textAlign: "justify",
    width: "90%",
    fontSize: 17,
    fontWeight: "bold",
    color: "#7E60BF",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "90%",
    height: 50,
    borderRadius: 5,
    marginVertical: 10,
    textAlign: "center",
    color: "#433878",
    fontWeight: "bold",
    borderColor: "#E4B1F0",
  },
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
    color: "#fff",
    fontWeight: "500",
    fontSize: 17,
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
  signupButtonTextStyle: {
    color: "#7E60BF",
    fontWeight: "500",
    fontSize: 17,
  },
});
