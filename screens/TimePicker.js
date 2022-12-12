import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const TimePicker = () => {
    const [selectedTime, setSelectedTime] = useState([]);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showTimePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setSelectedDate(date);
        setSelectedTime([date.getHours(), date.getMinutes()])
        hideTimePicker();
    };

    return (
        <View style={styles.container}>
            <Button title="Show Time Picker" onPress={showTimePicker} />
            <Text style={styles.text}>
                {selectedTime[0] ? `${selectedTime[0]}:${selectedTime[1]}` : 'No time selected'}
            </Text>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideTimePicker}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 40,
    },
    text: {
        marginBottom: 20,
        fontSize: 20
    },
    cancel: {
    },
})

export default TimePicker;
