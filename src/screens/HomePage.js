import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";

const HomePage = () => {
  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reactNativeLesson"), {
        title: "zero to hero",
        content: "react native tutorial for beginner",
        lesson: 95,
      });
      console.log("document written with id : ", docRef.id);
    } catch (error) {
      console.error("error adding document ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <CustomButton
        buttonText="Save"
        handleOnPress={sendData}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
