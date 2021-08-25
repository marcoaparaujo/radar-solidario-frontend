//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    });

export default useStyles;
