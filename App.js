import { StyleSheet, View } from 'react-native';

import colors from './config/colors';
import QuizRemote from './screens/QuizRemote';


function App() {
  return (
    <View style={styles.container}>
      <QuizRemote />
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




