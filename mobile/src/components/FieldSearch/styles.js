//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        input: {
            height: 50,
            backgroundColor: theme.colors.light.dark
        },
        inputContainer: {
            borderRadius: 30,
            backgroundColor: theme.colors.light.dark
        },
        container: {
            padding: 0,
            width: '100%',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            backgroundColor: 'transparent'
        },
        searchIcon: {
            fontSize: 18,
            marginLeft: 5
        },
        error: {
            margin: 0,
            fontSize: 14,
            marginTop: 5,
            minHeight: 18,
            marginBottom: 5,
            color: theme.colors.negative.dark,
            ...ALIGN.RIGHT,
            ...FONT.MEDIUM
        }
    });
};
export default useStyles;
