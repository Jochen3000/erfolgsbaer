import { StyleSheet, View } from 'react-native';

import MyAccount from './screens/MyAccount';
import colors from './config/colors';
import Listings from './screens/Listings';


function App() {
  return (
    <View style={styles.container}>
      <Listings />
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




