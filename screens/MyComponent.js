import React from 'react';
import { useMyValue } from './myHooks';

function MyComponent() {
    const value = useMyValue();

    return <Text>The value is: {value}</Text>;
}