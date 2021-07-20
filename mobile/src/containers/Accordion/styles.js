//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        accordion: {
            width: '100%',
            borderWidth: 2,
            marginBottom: 20,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderTopColor: theme.colors.light.dark,
            borderBottomColor: theme.colors.light.dark
        },
        container: {
            backgroundColor: theme.colors.light.medium
        },
        title: {
            fontSize: 16,
            paddingLeft: 7,
            ...FONT.BOLD
        }
    });
};

export default useStyles;
