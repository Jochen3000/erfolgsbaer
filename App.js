import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './config/colors';
import Exercises from './screens/Exercises';
import Journal from './screens/Journal';


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
          name="Journal"
          component={Journal}
          options={{
            tabBarLabel: 'Journal',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="pencil" color={color} size={size} />
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




