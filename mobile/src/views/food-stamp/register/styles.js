//#region Imports

import MARGIN from 'assets/styles/margin';
import { StyleSheet, Dimensions } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: Dimensions.get('window').height,
            ...MARGIN.F_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        header: {
            marginBottom: 'auto'
        },
        viewPeso: {
            flexDirection: 'row',
            marginTop: 25
        },
        viewQtd: {
            flexDirection: 'row'
        },
        button: {
            paddingTop: 20
        }
    });

export default useStyles;
