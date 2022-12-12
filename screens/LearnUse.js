import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import DateTimePicker from '@react-native-community/datetimepicker';


function LearnUse() {

    // Lots of stuff for date time picker
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    // Notifications.cancelAllScheduledNotificationsAsync()

    // async function requestPermissionsAsync() {
    //     return await Notifications.requestPermissionsAsync({
    //         ios: {
    //             allowAlert: true,
    //             allowBadge: true,
    //             allowSound: true,
    //             allowAnnouncements: true,
    //         },
    //     });
    // }
    // requestPermissionsAsync();



    const mySeconds = 300;


    Notifications.setNotificationHandler({
        handleNotification: async () => {
            return {
                shouldShowAlert: true,
                shouldPlaySound: true,
                shouldSetBadge: true,
            };
        },
    });

    const content = { title: 'I am a one, hasty notification.' };

    Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail! 📬",
            body: 'Here is the notification body',
            data: { data: 'goes here' },
        },

        // trigger: {
        //     hour: hours,
        //     minute: minutes,
        //     repeats: true,
        //   }
        trigger: {
            seconds: mySeconds,
            repeats: false,
        },
    });

    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>selected: {date.toLocaleString()}</Text>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        onChange={onChange}
                    />
                )}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingLeft: 12,
    }
})

export default LearnUse;
