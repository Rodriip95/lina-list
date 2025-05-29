import {
  ActivityIndicator,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useGoogleLogin } from "../hook/useGoogleLogin";

const LoginScreen = () => {
  const { promptAsync, loading } = useGoogleLogin();

  const handlePress = () => {
    promptAsync().catch((error) => {
      console.error("Error during Google login:", error);
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      {loading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            zIndex: 1,
            elevation: 5, // For Android shadow
          }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <Text style={{ color: "red" }}>Open!</Text>
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "blue" : "green",
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        <Text style={{ color: "white" }}>Login with Google</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginScreen;
