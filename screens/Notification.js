import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import TimePicker from './TimePicker';

function Notification() {

  const [permissionGranted, setPermissionGranted] = useState(false);

  // check if user has given permissions
  useEffect(() => {
    async function checkPermission() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status === 'granted') {
        console.log('User has granted notification permission');
        setPermissionGranted(true)
      } else {
        console.log('User has not granted notification permission');
      }
    }
    checkPermission();
  }, [])

  // enable user to give permissions on ios
  const requestPermission = () => {
    async function requestPermissionsAsync() {
      return await Notifications.requestPermissionsAsync({
        ios: {
          allowAlert: true,
          allowBadge: true,
          allowSound: true,
          allowAnnouncements: true,
        },
      });
    }
    requestPermissionsAsync();
  }

  // allow user to cancel notifications
  const cancelNotification = () => {
    Notifications.cancelAllScheduledNotificationsAsync()
  }



  // initialise notification handler
  Notifications.setNotificationHandler({
    handleNotification: async () => {
      return {
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      };
    },
  });

  // allow user to set notifications
  const setNotification = () => {
    const myMinutes = 51;
    const myHours = 15;

    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'take it easy',
        data: { data: 'goes here' },
      },

      // trigger: {
      //     hour: hours,
      //     minute: minutes,
      //     repeats: true,
      //   }
      trigger: {
        minute: myMinutes,
        hour: myHours,
        repeats: false,
      },
    });
  }

  return (
    <View style={styles.container}>
      <Text>Hallo Leute</Text>
      <TimePicker />
      <View style={styles.statusbox}>
        <Button title="Set notification" onPress={setNotification} />
        <Button title="Cancel notification" onPress={cancelNotification} />
      </View>
      <View style={styles.statusbox}>
        <Text>You have granted permissions</Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: 'center',
  },
  statusbox: {
    paddingTop: 100,
  },
})

export default Notification;
