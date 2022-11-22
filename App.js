import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './config/colors';
import ExerciseDetails from './screens/ExerciseDetails';
import ExerciseList from './screens/ExerciseList';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExerciseList" component={ExerciseList} />
          <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
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




