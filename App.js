import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Button,
  Platform,
  Dimensions
} from 'react-native';
import ViewImageScreen from './screens/ViewImageScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <ViewImageScreen />
  );
}


