import React from 'react';
import { useUserStore } from '../store/useUserStore';
import { Text, View, Image } from 'react-native';

interface HomeScreenProps {
  route: {
    params: {
      authentication: {
        accessToken: string;
      }
    }
  }
}

const HomeScreen = ({route}:HomeScreenProps) => {
  const user = useUserStore((state) => state.user);

  if (!user) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Hola, {user.name}!</Text>
      <Text>{user.email}</Text>
      {user.photoURL && <Image source={{ uri: user.photoURL }} style={{ width: 80, height: 80, borderRadius: 40 }} />}
    </View>
  );
}


export default HomeScreen;