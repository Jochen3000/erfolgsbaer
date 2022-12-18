import React from 'react';
import { StyleSheet } from 'react-native';
import { useState, createContext } from 'react';
import authContext from './auth/authContext';

import colors from './config/colors';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';

function App() {

  const [user, setUser] = useState(null);
  const loggedIn = true;


  return (
    <authContext.Provider value={{ user, setUser }}>
      {user
        ? <AppNavigator />
        : <AuthNavigator />}
    </authContext.Provider>
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




