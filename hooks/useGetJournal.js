import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useGetJournal() {

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

    // Append new entry to array
    const updateVals = (vals) => {
        setStorageItems((oldarray) => [...oldarray, {
            title: vals.title,
            id: Math.random().toString()
        }])
    }

    // write array to asynch storage
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('entryStored2', JSON.stringify(storageItems))
        } catch (e) {
            // saving error
            console.log('cant save');
        }
    }

    useEffect(() => {
        storeData();
    }, [storageItems]);

    return { storageItems, updateVals }
}

export default useGetJournal;



