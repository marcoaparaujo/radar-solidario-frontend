//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
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
