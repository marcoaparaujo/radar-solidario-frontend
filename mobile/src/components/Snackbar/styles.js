//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            bottom: 10,
            zIndex: 100,
            minHeight: 50,
            marginHorizontal: 10,
            position: 'absolute',
            width: Dimensions.get('screen').width - 20
        },
        content: {
            padding: 10,
            minHeight: 50,
            borderWidth: 2,
            borderRadius: 10,
            borderColor: theme.colors.negative.dark,
            backgroundColor: theme.colors.primary.dark,
            ...ALIGN.CENTER
        },
        text: {
            fontSize: 16,
            marginHorizontal: 10,
            color: theme.colors.white,
            ...FONT.MEDIUM
        },
        action: {
            color: theme.colors.white,
            textTransform: 'uppercase',
            ...FONT.MEDIUM
        }
    });
};

export default useStyles;
