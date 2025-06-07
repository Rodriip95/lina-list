import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';

export type RootStackParamList = {
    HomeScreen: {
        authentication: any;
    };
    LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    );
};

export default RootNavigation;