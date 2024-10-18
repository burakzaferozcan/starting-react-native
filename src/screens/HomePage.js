import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import CustomButton from "../components/CustomButton";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [data]);

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

  const getData = async () => {
    const allData = [];
    try {
      const querySnapshot = await getDocs(collection(db, "reactNativeLesson"));
      querySnapshot.forEach((doc) => {
        allData.push({ ...doc.data(), id: doc.id });
      });
    } catch (error) {
      console.log(error);
    }
    setData(allData);
  };

  const deleteData = async (value) => {
    try {
      await deleteDoc(doc(db, "reactNativeLesson", value));
      console.log("deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    try {
      const lessonData = doc(db, "reactNativeLesson", "C0LJu7OpHqxtfkV9kn1E");
      await updateDoc(lessonData, {
        lesson: 8,
      });
    } catch (error) {
      console.log(error);
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
      {data.map((item, index) => (
        <Pressable key={index} onPress={() => deleteData(item.id)}>
          <Text>
            {item.id} - {item.title} - {item.content} - Lesson: {item.lesson}
          </Text>
        </Pressable>
      ))}
      <CustomButton
        buttonText="Get Data"
        handleOnPress={getData}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
      <CustomButton
        buttonText="Delete Data"
        handleOnPress={deleteData}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
      <CustomButton
        buttonText="Update Data"
        handleOnPress={updateData}
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
