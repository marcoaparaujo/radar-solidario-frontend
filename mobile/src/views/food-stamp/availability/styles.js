//#region Imports

import ALIGN from 'assets/styles/align';
import MARGIN from 'assets/styles/margin';
import { StyleSheet, Dimensions } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: Dimensions.get('window').height,
            ...MARGIN.F_FORM,
            ...ALIGN.BETWEEN,
            flexDirection: 'column'
        },
        info: {
            marginBottom: 32
        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
