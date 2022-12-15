import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import TimePicker from '../components/TimePicker';
import useNotification from '../hooks/useNotifications';

function Notification() {

  const {
    notifyHourMinute,
    permissionGranted,
    requestPermission,
    cancelNotification,
    setNotification
  } = useNotification();

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
