//#region Imports

import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            height: 50,
            marginLeft: 0,
            marginRight: 0
        },
        text: {
            color: theme.colors.grey
        },
        button: {
            backgroundColor: theme.colors.light.dark
        },
        selectedText: {
            color: theme.colors.white
        },
        selectedButton: {
            backgroundColor: theme.colors.black
        }
    });
};

export default useStyles;
