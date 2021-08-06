//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: '100%',
            ...ALIGN.BETWEEN,
            flexDirection: 'column'
        },
        fields: {
            marginBottom: 20
        }
    });

export default useStyles;
