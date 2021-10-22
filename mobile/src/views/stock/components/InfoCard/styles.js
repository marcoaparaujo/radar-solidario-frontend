//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 10,
            width: '100%',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'grey',
            ...ALIGN.LEFT,
            flexDirection: 'column'
        },
        infoContainer: {
            width: '100%',
            ...ALIGN.BETWEEN
        },
        text: {
            fontSize: 20,
            marginTop: 10,
            paddingLeft: 20,
            ...FONT.MEDIUM
        },
        button: {
            width: 35,
            padding: 3,
            marginTop: 10,
            borderRadius: 6,
            backgroundColor: '#42AFD7'
        }
    });

export default useStyles;
