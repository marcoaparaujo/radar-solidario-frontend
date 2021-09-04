//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flex: 1,
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
            width: '100%',
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        forgotPassword: {
            marginTop: 10
        },
        register: {
            ...ALIGN.CENTER,
            alignItems: 'flex-end'
        },
        text: {
            fontSize: 13,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        registerText: {
            marginLeft: 3,
            ...FONT.BOLD
        }
    });

export default useStyles;
