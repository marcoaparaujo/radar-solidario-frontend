//#region Imports

import { StyleSheet } from 'react-native';
import FONT from './../../assets/styles/font';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        headerContainer: {
            height: 200,
            backgroundColor: '#2D8FB3'
        },
        profile: {
            color: '#F6F6F6',
            fontSize: 20,
            padding: 20,
            ...FONT.MEDIUM
        },
        user: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        icon: {
            marginBottom: 20
        },
        charityName: {
            fontSize: 20,
            color: '#F6F6F6'
        },
        exit: {
            fontSize: 18,
            color: 'red'
        }
    });

export default useStyles;
