//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: '100%',
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        image: {
            width: 200,
            height: 200
        },
        form: {
            height: 260,
            width: '100%',
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        text: {
            fontSize: 13,
            ...FONT.MEDIUM
        },
        forgotPassword: {
            marginTop: 10
        }
    });

export default useStyles;
