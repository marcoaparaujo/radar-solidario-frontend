//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        text: {
            padding: 5,
            ...FONT.REGULAR,
            justifyContent: 'center',
            fontSize: 20,
            color: theme.colors.secondary.dark,
        },
        button: {
            paddingTop: 20
        }
    });
};

export default useStyles;
