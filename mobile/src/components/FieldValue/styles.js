//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN.CENTER
        },
        text: {
            fontSize: 20,
            marginBottom: 20
        },
        leftText: {
            marginRight: 15,
            ...FONT.BOLD
        },
        input: {
            width: 55
        },
        rightText: {
            marginLeft: 10
        }
    });

export default useStyles;
