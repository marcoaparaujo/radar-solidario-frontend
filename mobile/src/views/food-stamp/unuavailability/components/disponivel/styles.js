
//#region Imports

import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        view2: {
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
