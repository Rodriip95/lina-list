// src/hooks/useGoogleLogin.ts
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../firebase/config";
import { useUserStore } from "../store/useUserStore";
import * as WebBrowser from "expo-web-browser";
import { ANDROID_CLIENT_ID, WEB_CLIENT_ID } from "@env";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/RootNavigation";

WebBrowser.maybeCompleteAuthSession();

export const useGoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const setUser = useUserStore((state) => state.setUser);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  const loginWithFirebase = async () => {
    try {
      if (response?.type === "success") {
        //const { id_token, access_token } = response.authentication!;
        const { authentication } = response;
        const credential = GoogleAuthProvider.credential(
          authentication?.idToken,
          authentication?.accessToken
        );
        const firebaseCredential = await signInWithCredential(auth, credential);
        const user = firebaseCredential.user;
        setUser({
          uid: user.uid,
          name: user.displayName ?? "",
          email: user.email ?? "",
          photoURL: user.photoURL ?? "",
        });
        navigation.navigate("HomeScreen", {
          authentication: authentication,
        });
      } else if (response?.type === "error") {
        console.error("Authentication error:", response.params.error);
      }
    } catch (error) {
      console.log("Error during Google login:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loginWithFirebase();
  }, [response]);

  return { request, promptAsync, loading };
};
