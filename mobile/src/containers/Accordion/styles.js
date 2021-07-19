//#region Imports

import { StyleSheet } from 'react-native';
import FONT from 'assets/styles/font';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        accordion: {
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255)'
        },
        title: {
            fontSize: 16,
            paddingLeft: 7,
            ...FONT.BOLD
        }
    });

export default useStyles;
