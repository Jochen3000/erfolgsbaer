import React from 'react';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import authContext from './auth/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from './config/colors';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';

function App() {

  const [user, setUser] = useState(null);

  // check if we have a stored user
  useEffect(() => {
    const restoreUser = async () => {
      const storedString = await AsyncStorage.getItem('auth.currentUser');
      if (storedString) {
        const storedUser = JSON.parse(storedString).email;
        console.log('mein user', storedUser);
        setUser(storedUser);
      }
    };
    restoreUser();
  }, []);


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




