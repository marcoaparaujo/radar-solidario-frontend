//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 20,
            ...ALIGN.CENTER,
            justifyContent: 'flex-start'
        },
        icon: {
            color: '#000000'
        },
        content: {
            margin: 10,
            paddingLeft: 7
        },
        text: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        value: {
            fontSize: 17
        }
    });

export default useStyles;
