import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import MyContext from '../auth/MyContext';

const MyComponent = () => {
    const { count, setCount } = useContext(MyContext);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{count}</Text>
        </View>
    );
};

export default MyComponent;
