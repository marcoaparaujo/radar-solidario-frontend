//#region Imports

import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        card: {
            backgroundColor: theme.colors.light.medium
        }
    });
};

export default useStyles;
