//#region Imports

import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        checkboxContainer: {
            marginLeft: 0,
            paddingLeft: 0,
            borderColor: 'transparent',
            backgroundColor: theme.colors.light.medium
        }
    });
};

export default useStyles;
