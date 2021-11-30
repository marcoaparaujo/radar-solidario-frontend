//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            marginTop: 20,
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        label: {
            fontSize: 16,
            ...FONT.BOLD
        },
        textValid: {
            fontSize: 21,
            color: theme.colors.positive.medium
        },
        textInvalid: {
            fontSize: 21,
            color: theme.colors.negative.medium
        }
    });
};

export default useStyles;
