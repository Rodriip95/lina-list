import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuthRequest } from 'expo-auth-session/providers/google';
import { RootStackParamList } from '../navigation/RootNavigation';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ANDROID_CLIENT_ID } from '@env';

const LoginScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    const [request, response, promptAsync] = useAuthRequest(
      {
        androidClientId: ANDROID_CLIENT_ID
      }
    )
  
    const onPress = () => {
      promptAsync().catch((error) => {
        console.error('Error during Google authentication:', error);
      }
      );
    };


    React.useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response.params;
        console.log('Authentication successful:', authentication);
        navigation.navigate('HomeScreen');
      } else if (response?.type === 'error') {
        console.error('Authentication error:', response.params.error);
      }
    }, [response]);


  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Text style={{color: 'red'}}>Open!</Text>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'blue' : 'green',
            padding: 10,
            borderRadius: 5,
          },
        ]}
      >
        <Text style={{ color: 'white' }}>Login with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LoginScreen
