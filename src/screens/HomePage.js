import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
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
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [updateTheData, setUpdateTheData] = useState("");

  const dispatch = useDispatch();

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

  const updateData = async (value) => {
    try {
      const lessonData = doc(db, "reactNativeLesson", value);
      await updateDoc(lessonData, {
        content: updateTheData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    dispatch(logout());
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
          <CustomButton
            buttonText="Update Data"
            handleOnPress={() => updateData(item.id)}
            buttonTextColor="#fff"
            buttonBackgroundColors={["#433878", "#7E60BF"]}
          />
        </Pressable>
      ))}
      <CustomButton
        buttonText="Get Data"
        handleOnPress={getData}
        buttonTextColor="#fff"
        buttonBackgroundColors={["#433878", "#7E60BF"]}
      />
      <TextInput
        value={updateTheData}
        onChangeText={setUpdateTheData}
        placeholder="enter your update data"
        style={{ borderWidth: 1, width: "90%" }}
      />
      <CustomButton
        buttonText="Logout"
        handleOnPress={handleLogout}
        buttonTextColor="#fff"
        buttonBackgroundColors={["gray", "red"]}
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
