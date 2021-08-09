//#region Imports

import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        form: {
            height: '100%',
            ...MARGIN.F_FORM
        }
    });

export default useStyles;
