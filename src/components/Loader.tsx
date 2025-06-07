import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 37, 56, 0.8)",
    zIndex: 1,
    elevation: 5, // For Android shadow
  },
});
