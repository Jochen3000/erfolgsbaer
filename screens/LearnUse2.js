import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import authContext from '../auth/authContext';
import LearnChild from './LearnChild';

const LearnUse2 = () => {
    const [user, setUser] = useState('jochen');

    return (
        <authContext.Provider value={{ user, setUser }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <LearnChild />
            </View>
        </authContext.Provider>
    );
};

export default LearnUse2;




