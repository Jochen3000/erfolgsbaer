import React from 'react';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import authContext from './auth/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import colors from './config/colors';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import OnboardingNavigator from './navigation/OnboardingNavigator';

SplashScreen.preventAutoHideAsync();

function App() {
  const [onBoarding, setOnBoarding] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const startUp = async () => {
      // get stored onboarding status
      const restoreOnboarding = async () => {
        const storedOnboardingStatus = await AsyncStorage.getItem('onboarding');
        if (storedOnboardingStatus) {
          // setOnBoarding(JSON.parse(storedOnboardingStatus));
        } else {
          console.log('kein onboarding gespeichert')
          return;
        }
      };
      await restoreOnboarding();

      // get stored user
      const restoreUser = async () => {
        const storedString = await AsyncStorage.getItem('auth.currentUser');
        if (storedString) {
          const storedUser = JSON.parse(storedString).email;
          setUser(storedUser);
        } else {
          return;
        }
      };
      await restoreUser();

      // hide splash screen when startUp is finished
      return SplashScreen.hideAsync();
    }
    startUp();
  }, []);

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




