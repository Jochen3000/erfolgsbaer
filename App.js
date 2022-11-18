import { StyleSheet, View } from 'react-native';

import colors from './config/colors';
import Quiz from './screens/Quiz';


function App() {
  return (
    <View style={styles.container}>
      <Quiz />
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




