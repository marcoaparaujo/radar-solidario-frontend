//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet, Dimensions } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: Dimensions.get('window').height,
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        title: {
            padding: 28
        },
        text: {
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        name: {
            marginTop: 8,
            marginBottom: 20
        }
    });

export default useStyles;
