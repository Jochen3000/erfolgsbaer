import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment/moment";

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
        const item = JSONparse(value);

        if (!item) return null;

        const now = moment(Date.now());
        const storedTime = moment(item.timestammp);
        const isExpired = now.diff(storedTime, 'minutes') > 3000000;
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