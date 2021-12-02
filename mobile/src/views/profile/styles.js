//#region Imports

import { StyleSheet } from 'react-native';
import FONT from 'assets/styles/font';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        header: {
            backgroundColor: '#2D8FB3'
        },
        profile: {
            color: '#F6F6F6',
            fontSize: 20,
            padding: 20,
            ...FONT.MEDIUM
        },
        user: {
            marginTop: 60,
            marginBottom: 20,
            ...ALIGN.CENTER,
            flexDirection: 'column'
        },
        icon: {
            color: '#FFFFFF',
            marginBottom: 20
        },
        logoff: {
            fontSize: 18,
            color: 'red'
        }
    });

export default useStyles;
