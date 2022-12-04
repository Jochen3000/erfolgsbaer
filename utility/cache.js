import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from 'dayjs';

const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(key, JSON(stringify(item)));
    } catch (error) {
        console.log(error);
    }
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        const item = JSON.parse(value);

        if (!item) return null;

        const now = dayjs();
        const storedTime = dayjs(item.timestamp);
        const isExpired = now.diff(storedTime, 'hour') > 24;
        if (isExpired) {
            await AsyncStorage.removeItem(key);
            return null;
        }
        return (item.value)
    } catch (error) {
        console.log(error);
    }
}

export default { store, get }