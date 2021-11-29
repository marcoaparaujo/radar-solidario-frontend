//#region Imports

import MARGIN from 'assets/styles/margin';
import { StyleSheet, Dimensions } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        form: {
            height: Dimensions.get('window').height,
            ...MARGIN.F_FORM
        }
    });

export default useStyles;
