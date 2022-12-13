import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './config/colors';
import Exercises from './screens/Exercises';
import Journal from './screens/Journal';
import AudioPlayer from './screens/AudioPlayer';
import LoginScreen from './screens/LoginScreen';
import LearnUse from './screens/LearnUse';
import Notification from './screens/Notification';

function App() {

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
          name="AudioPlayer"
          component={AudioPlayer}
          options={{
            tabBarLabel: 'Audio Player',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="speaker" color={color} size={size} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightbg,
    padding: 20,
    paddingTop: 60,
  }
})

export default App;




