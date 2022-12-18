import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import * as FileSystem from 'expo-file-system';


function LearnUse() {


    // URL of the file you want to download
    const url = 'https://adagiafiles.s3.eu-west-1.amazonaws.com/audio/01.03d005cd-2021-4847-ad0e-db9b3fdb1ab9.mp3';

    // Location on the device where the file should be saved
    const downloadDirectory = FileSystem.documentDirectory + 'my-downloads' + 'file1.mp3';

    // Download the file
    const downloadFile = () => {
        FileSystem.downloadAsync(url, downloadDirectory)
            .then(({ uri }) => {
                // The file has been downloaded and saved to the downloadDirectory
                // You can now use the file from the uri variable
                console.log(uri);
            })
            .catch(error => {
                // Something went wrong!
                console.error(error);
            });
    }


    return (
        <View style={styles.container}>
            <Text>Hallo Leute</Text>
            <Button title='download file' onPress={downloadFile} />
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
