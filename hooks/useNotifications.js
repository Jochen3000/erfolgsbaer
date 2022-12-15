import { useState, useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export default function useNotification() {
    const [notificationTime, setNotificationTime] = useState([]);
    const [permissionGranted, setPermissionGranted] = useState(false);

    // get time from TimePicker
    const notifyHourMinute = (time) => {
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
        console.log('notification gesetzt', notificationTime);
    }

    return {
        notifyHourMinute,
        permissionGranted,
        requestPermission,
        cancelNotification,
        setNotification
    };
}

