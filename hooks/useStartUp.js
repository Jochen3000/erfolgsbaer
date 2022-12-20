import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

function useStartUp() {
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
    return { onBoarding, setOnBoarding, user, setUser };
}

export default useStartUp;