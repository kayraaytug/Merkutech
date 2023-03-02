import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import VideoScreen from '../screens/VideoScreen';
import NotificationScreen from '../screens/NotificationScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={LoginScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
                <Stack.Screen name="VideoScreen" component={VideoScreen} />
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Navigation;