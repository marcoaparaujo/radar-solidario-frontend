
//#region Imports

import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        view: {
            flexDirection: 'row',
        },
        disponivel: {
            marginBottom: 12,
            fontSize: 16,
            ...FONT.BOLD,
        },
        subTitle: {
            marginTop: 15,
            fontSize: 16,
            ...FONT.REGULAR,
        },


    });

export default useStyles;
