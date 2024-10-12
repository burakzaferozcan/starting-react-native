import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ color: "#E4B1F0", fontSize: 20, marginBottom: 20 }}>
        Welcome {result}
      </Text>
      <Text style={styles.labelStyle}>Name</Text>
      <TextInput
        placeholder="Enter Your Name"
        style={styles.textInputStyle}
        onChangeText={setName}
        value={name}
      />
      <Text style={styles.labelStyle}>Last Name</Text>
      <TextInput
        placeholder="Enter Your Last Name"
        style={styles.textInputStyle}
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        style={({ pressed }) => [
          styles.buttonStyle,
          {
            backgroundColor: pressed ? "#433878" : "#7E60BF",
          },
        ]}
        onPress={() => setResult(name + " " + lastName)}
      >
        <Text style={styles.buttonTextStyle}>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  labelStyle: {
    textAlign: "justify",
    width: "80%",
    fontSize: 17,
    fontWeight: "bold",
    color: "#7E60BF",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
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
    width: "80%",
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
});
