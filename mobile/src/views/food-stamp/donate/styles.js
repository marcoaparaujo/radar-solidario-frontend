//#region Imports

import ALIGN from 'assets/styles/align';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        containerMain:{
            height: '100%',
            justifyContent: 'space-around',
        },
        container: {
            width: '100%',
            paddingBottom: 100

        },
        content: {
            flexDirection: 'row'
        },
        button: {
            padding: 20,

        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        },
        mainView: {
            justifyContent: 'center',
            margin: 10
        },

        aboveView: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10

        },
    });

export default useStyles;
