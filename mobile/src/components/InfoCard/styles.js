//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 10,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'grey',
            alignItems: 'center',
            width: Dimensions.get('screen').width - 75,
            ...ALIGN.LEFT,
            flexDirection: 'column'
        },
        dateContainer: {
            width: '100%',
            paddingTop: 5,
            paddingHorizontal: 10,
            ...ALIGN.LEFT,
            alignItems: 'flex-start'
        },
        infoContainer: {
            width: '100%',
            paddingBottom: 5,
            paddingHorizontal: 20,
            ...ALIGN.BETWEEN,
            alignItems: 'center'
        },
        text: {
            fontSize: 20,
            ...FONT.MEDIUM
        },
        button: {
            width: 35
        },
        iconContainer: {
            marginBottom: 3
        }
    });

export default useStyles;
