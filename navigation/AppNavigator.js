import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Exercises from '../screens/Exercises';
import Journal from '../screens/Journal';
import LoginScreen from '../screens/LoginScreen';
import Notification from '../screens/Notification';

function AppNavigator() {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveBackgroundColor: 'tomato',
                    tabBarActiveTintColor: 'white',
                }}
            >
                <Tab.Screen
                    name="Exercises"
                    component={Exercises}
                    options={{
                        tabBarLabel: 'Exercises',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Journal"
                    component={Journal}
                    options={{
                        tabBarLabel: 'Journal',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="pencil" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Auth"
                    component={LoginScreen}
                    options={{
                        tabBarLabel: 'login',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="emoticon-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Notification"
                    component={Notification}
                    options={{
                        tabBarLabel: 'notify',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="message-outline" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;