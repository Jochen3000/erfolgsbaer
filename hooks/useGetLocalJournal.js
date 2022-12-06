import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useGetLocalJournal() {

    const [storageItems, setStorageItems] = useState([])

    // read storage and put in array
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('entryStored2')
            if (value !== null) {
                const data = JSON.parse(value);
                // put data in array
                setStorageItems(data);
            }
        } catch (e) {
            // error reading value
            console.log('da sind keine daten')
        }
    }
    useEffect(() => {
        getStoredData();
    }, []);
    return storageItems
}

export default useGetLocalJournal;



