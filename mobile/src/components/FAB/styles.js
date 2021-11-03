//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            zIndex: 999,
            width: 'auto',
            right: 10,
            bottom: 10
        }
    });

export default useStyles;
