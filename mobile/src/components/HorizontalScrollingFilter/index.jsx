//#region Imports

import React from 'react';
import { ScrollView } from 'react-native';

//#endregion

const HorizontalScrollingFilter = ({ children }) => (
    <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToAlignment='center'
        contentInset={{ top: 0, left: 30, bottom: 0, right: 30 }}
    >
        {children}
    </ScrollView>
);

export default HorizontalScrollingFilter;
