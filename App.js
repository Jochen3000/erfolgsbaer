import React from 'react';
import { StyleSheet } from 'react-native';
import authContext from './auth/authContext';
import * as SplashScreen from 'expo-splash-screen';

import colors from './config/colors';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import OnboardingNavigator from './navigation/OnboardingNavigator';
import useStartUp from './hooks/useStartUp';

SplashScreen.preventAutoHideAsync();

function App() {

  const { onBoarding, setOnBoarding, user, setUser } = useStartUp();

  return (
    <authContext.Provider value={{ user, setUser }}>
      {user
        ? <AppNavigator />
        : onBoarding
          ? <OnboardingNavigator setOnBoarding={setOnBoarding} /> :
          <AuthNavigator />}
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




