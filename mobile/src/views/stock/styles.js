//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
            // height: Dimensions.get('screen').height,
        },
        text: {
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        textSpace: {
            padding: 28
        }
    });

export default useStyles;
