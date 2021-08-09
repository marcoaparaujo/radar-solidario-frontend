//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            marginTop: 5,
            marginBottom: 5
        },
        content: {
            width: '100%',
            borderWidth: 2,
            borderRadius: 5,
            borderColor: theme.colors.light.light,
            ...ALIGN.BETWEEN
        },
        picker: {
            height: 50,
            fontSize: 18,
            width: '100%',
            borderColor: 'transparent',
            backgroundColor: theme.colors.light.light,
            ...ALIGN.CENTER
        },
        item: {
            color: theme.colors.primary.dark
        },
        loader: {
            marginLeft: 8,
            marginRight: 8,
            color: theme.colors.primary.dark,
            ...ALIGN.RIGHT
        }
    });
};

export default useStyles;
