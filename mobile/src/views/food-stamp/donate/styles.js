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
        content: {
            margin: 10,
            justifyContent: 'center'
        },
        text: {
            fontSize: 20
        }
    });

export default useStyles;
