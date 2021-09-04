//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        view: {
            width: '100%'
        },
        input: {
            minWidth: 0,
            fontSize: 16,
            minHeight: 56,
            marginLeft: 15
        },
        container: {
            paddingLeft: 0,
            paddingRight: 0
        },
        inputContainer: {
            borderTopEndRadius: 4,
            borderTopStartRadius: 4,
            backgroundColor: theme.colors.light.dark
        },
        error: {
            height: 18,
            fontSize: 14,
            marginTop: 5,
            width: '100%',
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 5,
            textAlign: 'right',
            color: theme.colors.negative.dark,
            ...FONT.MEDIUM
        }
    });
};

export default useStyles;
