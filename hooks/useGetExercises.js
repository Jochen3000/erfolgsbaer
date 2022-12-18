import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from 'dayjs';

function useGetExercises() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [storageItems, setStorageItems] = useState([]);
    const [updateCache, setUpdateCache] = useState(false);


    useEffect(() => {
        getStoredData();
    }, []);

    // get stored data
    const getStoredData = async () => {
        try {
            const value = await AsyncStorage.getItem('meinkey')
            if (value !== null) {
                const data = await JSON.parse(value);
                // check valid
                const now = dayjs();
                const storedTime = dayjs(data.timestamp);
                const isExpired = now.diff(storedTime, 'minute') > 10;

                // put data in array or fetch new data
                if (!isExpired) {
                    setStorageItems(data.value);
                    setLoading(false);
                    console.log('reading data from cache');
                } else {
                    console.log('cache expired ', isExpired)
                    getRemoteData();
                }
            } else {
                console.log('no data in cache')
                getRemoteData();
            }
        } catch (e) {
            // error reading value
            console.log('no data', e)
        }
    }

    // get remote data
    const getRemoteData = () => {
        fetch('https://api.airtable.com/v0/appmkw9T6kKIvJvbq/exercises?maxRecords=3&view=Grid%20view', {
            method: "GET",
            headers: { "Authorization": "Bearer keyHNf6pSow89oumN" }
        })
            .then((response) => response.json())
            .then((json) => setStorageItems(json))
            .then(() => setUpdateCache(true))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

    }

    // save latest data to cache
    useEffect(() => {
        const storeCache = async (value) => {
            try {
                const item = {
                    value,
                    timestamp: Date.now()
                }
                await AsyncStorage.setItem('meinkey', JSON.stringify(item));
            } catch (error) {
                console.log(error);
            }
        }
        if (updateCache == true) {
            console.log('writing to cache ', updateCache);
            storeCache(storageItems)
        }
    }, [updateCache])


    return { storageItems, isLoading }
}

export default useGetExercises;


