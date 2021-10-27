//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        registerButton: {
            backgroundColor: '#2D8FB3',
            borderRadius: 7,
            margin: 'auto',
            height: 55,
            padding: 8,
            width: 200
        },
        text: {
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        textSpace: {
            padding: 28
        },
        buttonContainer: {
            flexDirection: 'row'
        },
        buttonView: {
            margin: 10
        },
        firstButton: {
            backgroundColor: '#2D8FB3'
        },
        secondButton: {
            backgroundColor: '#CC4E4E'
        },
        containerBoard: {
            height: 150,
            width: 350,
            borderRadius: 8,
            backgroundColor: '#F15B5B',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingBottom: 20
        }
    });

export default useStyles;
