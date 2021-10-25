//#region Imports

import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        flatList: {
            width: '100%'
        },
        contentContainer: {
            ...ALIGN.CENTER,
            alignItems: 'center',
            flexDirection: 'column'
        }
    });

export default useStyles;
