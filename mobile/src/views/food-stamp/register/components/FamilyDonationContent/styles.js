
//#region Imports

import { StyleSheet } from 'react-native';
import  ALIGN  from 'assets/styles/align';

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
            padding: 20
        },
        text: {
            fontSize: 16,
            ...ALIGN.CENTER
        }
    });

export default useStyles;
