import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const Loading = ({ changeIsLoading }) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeIsLoading()}
        style={styles.closeButtonContainer}
      >
        <Text style={styles.closeButton}>X</Text>
      </Pressable>
      <ActivityIndicator size={"large"} color={"#7E60BF"} />
      <Text style={styles.loadingText}>LOADING</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#FFE1FF",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  loadingText: {
    color: "#7E60BF",
    fontSize: 20,
    fontWeight: "900",
  },
  closeButton: {
    color: "#FFE1FF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "900",
  },
  closeButtonContainer: {
    backgroundColor: "#7E60BF",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: "center",
    alignContent: "center",
    position: "absolute",
    top: 50,
    right: 20,
  },
});
