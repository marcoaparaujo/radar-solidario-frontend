//#region Imports

import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const InfinityScrollLoader = () => {
    const { theme } = useTheme();

    return <ActivityIndicator size='large' color={theme.colors.primary.medium} />;
};

export default InfinityScrollLoader;
