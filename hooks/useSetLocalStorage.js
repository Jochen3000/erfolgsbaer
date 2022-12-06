import { useState, useEffect } from "react";



function useSetLocalStorage(value, updateCache, storageItems) {



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

}
