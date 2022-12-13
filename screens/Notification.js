import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import TimePicker from '../components/TimePicker';

function Notification() {

  const [notificationTime, setNotificationTime] = useState([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  // set a value from child
  const notifyHourMinute = (time) => {
    console.log('parent received', time[0]);
    setNotificationTime(time);
  }

  // check if user has given permissions
  useEffect(() => {
    async function checkPermission() {
      const { status } = await Notifications.getPermissionsAsync();
      if (status === 'granted') {
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

    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'take it easy',
      },

      trigger: {
        minute: notificationTime[1],
        hour: notificationTime[0],
        repeats: true,
      },
    });
  }

  return (
    <View style={styles.container}>
      <TimePicker notifyHourMinute={notifyHourMinute} />
      <Button title="Aktivate notifications" onPress={setNotification} />
      <View style={styles.statusbox}>
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
