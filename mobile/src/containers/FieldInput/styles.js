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
            margin: 0,
            height: 18,
            fontSize: 14,
            marginTop: 5,
            width: '100%',
            marginBottom: 5,
            color: theme.colors.negative.dark,
            ...ALIGN.RIGHT,
            ...FONT.MEDIUM
        }
    });
};

export default useStyles;
