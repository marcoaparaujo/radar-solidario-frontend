//#region Imports

import ALIGN from 'assets/styles/align';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const { height } = Dimensions.get('screen');

const useStyles = () =>
    StyleSheet.create({
        flatList: {
            width: '100%',
            height: height - 280
        },
        contentContainer: {
            ...ALIGN.CENTER,
            alignItems: 'center',
            flexDirection: 'column'
        }
    });

export default useStyles;
