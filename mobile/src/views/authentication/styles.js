//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
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
            width: 150,
            height: 150
        },
        form: {
            height: 240,
            width: '100%',
            paddingLeft: 36,
            paddingRight: 36,
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        text: {
            fontSize: 12,
            ...FONT.MEDIUM
        }
    });

export default useStyles;
