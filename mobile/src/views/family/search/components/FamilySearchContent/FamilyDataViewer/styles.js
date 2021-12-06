//#region Imports

import FONT from 'assets/styles/font';
import ALIGN from 'assets/styles/align';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            marginTop: 5,
            width: Dimensions.get('screen').width - 200,
            ...ALIGN.LEFT,
            alignItems: 'flex-start'
        },
        label: {
            fontSize: 16,
            marginRight: 5,
            ...FONT.BOLD
        },
        text: {
            fontSize: 16
        }
    });
export default useStyles;
