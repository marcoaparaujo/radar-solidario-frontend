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
            width: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        content: {
            marginBottom: 20
        },
        info: {
            marginVertical: 10
        }
    });
};

export default useStyles;
