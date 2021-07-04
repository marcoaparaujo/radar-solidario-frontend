//#region Imports

import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            height: '50%',
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        image: {
            width: 150,
            height: 150
        }
    });

export default useStyles;
