//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 10,
            justifyContent: 'center'
        },
        content: {
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontSize: 20
        }
    });

export default useStyles;
