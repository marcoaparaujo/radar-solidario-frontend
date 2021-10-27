//#region Imports

import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

//#endregion

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        container: {
            width: 90,
            margin: 10,
            height: 30,
            borderWidth: 2,
            borderRadius: 20,
            borderStyle: 'solid',
            borderColor: theme.colors.grey
        },
        containerPressed: {
            backgroundColor: theme.colors.grey
        },
        text: {
            height: 30,
            marginTop: 3,
            textAlign: 'center',
            color: theme.colors.grey
        },
        textPressed: {
            color: '#FFFFFF'
        }
    });
};
export default useStyles;
