import React from 'react';
import { StyleSheet } from 'react-native';
import { useState, createContext, useContext } from 'react';

import colors from './config/colors';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import LearnUse2 from './screens/LearnUse2';

function App() {

  const AppContext = createContext(null);

  const [user, setUser] = useState(true);
  const [userName, setUserName] = useState('Jochen');
  const loggedIn = true;


  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      {loggedIn
        ? <AppNavigator />
        : <AuthNavigator />}
    </AppContext.Provider>
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




