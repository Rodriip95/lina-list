import {
  ActivityIndicator,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useGoogleLogin } from "../hook/useGoogleLogin";
import Loader from "../components/Loader";
import Icon from "../components/Icon";

const LoginScreen = () => {
  const [loadingComp, setLoading] = React.useState(false);
  const { promptAsync, loading } = useGoogleLogin();

  const handlePress = () => {
    setLoading(true);
    promptAsync().catch((error) => {
      console.error("Error during Google login:", error)
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/resources/background.png")}
      style={styles.background}
    >
    <View style={styles.container}>
      <StatusBar barStyle="default"/>
      {loading || loadingComp && (
        <Loader/>
      )}
      <View style={{ marginBottom: 40, alignItems: "center" }}>
      <Icon name="logo" />
      </View>
      <Pressable
        onPress={handlePress}
        style={() => [
          {
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingHorizontal: 32,
            borderRadius: 32,
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center"}}>
          <Icon name="google" width={24} height={24} />
          <Text style={{ color: "#000", marginLeft: 10 }}>Ingresar con Google</Text>
        </View>
      </Pressable>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
  },
});
export default LoginScreen;
