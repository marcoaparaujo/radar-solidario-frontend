//#region Imports

import ALIGN from 'assets/styles/align';
import MARGIN from 'assets/styles/margin';
import { StyleSheet, Dimensions } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            height: Dimensions.get('window').height,
            ...ALIGN.LEFT,
            ...MARGIN.H_FORM,
            flexDirection: 'column'
        },
        image: {
            width: 150,
            height: 150,
            marginTop: 50,
            marginBottom: 20
        },
        content: {
            width: '100%',
            marginTop: 20
        }
    });

export default useStyles;
