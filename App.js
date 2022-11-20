import { StyleSheet, View } from 'react-native';

import colors from './config/colors';
import QuizNew from './screens/QuizNew';



function App() {
  return (
    <View style={styles.container}>
      <QuizNew />
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




