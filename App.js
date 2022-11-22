import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from './config/colors';
import AirtableDetails from './screens/AirtableDetails';
import AirtableList from './screens/AirtableList';


function App() {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AirtableList" component={AirtableList} />
          <Stack.Screen name="AirtableDetails" component={AirtableDetails} />
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




