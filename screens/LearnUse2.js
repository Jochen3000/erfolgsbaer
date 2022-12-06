import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useGetLocalStorage from '../hooks/useGetLocalStorage';

function LearnUse2() {

    const storageItems = useGetLocalStorage('meinkey');

    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            <View>
                {storageItems.length > 0 && storageItems.map((item) => (
                    <View key={item.fields.id}>
                        <Text>{item.fields.exercise}</Text>
                    </View>
                ))}
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

export default LearnUse2;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useGetLocalStorage } from '../hooks/useGetLocalStorage';

// function LearnUse2() {

//     const storageItems = useGetLocalStorage();

//     return (
//         <View style={styles.container}>
//             <Text>Hallo Leute</Text>
//             {console.log('ich rendere', storageItems.length)}
//             <View>
//                 {storageItems.length > 0 && storageItems.map((item) => (
//                     <View key={item.fields.id}>
//                         <Text>{item.fields.exercise}</Text>
//                     </View>
//                 ))}
//             </View>
//         </View>
//     );

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 100,
//         paddingLeft: 12,
//     }
// })

// export default LearnUse2;