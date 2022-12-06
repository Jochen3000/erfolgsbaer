import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useGetLocalStorage(key) {

    const [storageItems, setStorageItems] = useState([])
    const [storageItems2, setStorageItems2] = useState([])

    // read storage and put in array
    useEffect(() => {
        const getStoredData = async () => {
            try {
                const value = await AsyncStorage.getItem(key)
                if (value !== null) {
                    const data = JSON.parse(value);
                    // put data in array
                    setStorageItems(data.value.records);
                    setStorageItems2(data[0]);


                }
            } catch (e) {
                // error reading value
                console.log('da sind keine daten')
            }
        }
        getStoredData();
    }, []);
    return storageItems2
}

export default useGetLocalStorage;



// const useGetLocalStorage = () => {
//     const [storageItems, setStorageItems] = useState([])

//     // read storage and put in array
//     useEffect(() => {
//     const getStoredData = async () => {
//         try {
//             const value = await AsyncStorage.getItem('meinkey')
//             if (value !== null) {
//                 const data = JSON.parse(value);
//                 // put data in array
//                 setStorageItems(data.value.records);

//             }
//         } catch (e) {
//             // error reading value
//             console.log('da sind keine daten')
//         }
//     }
//         getStoredData();
//     }, []);
//     return storageItems
// }

