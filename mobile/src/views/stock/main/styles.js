import ALIGN from 'assets/styles/align'
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native'

const useStyles = () =>
StyleSheet.create({
    container: {
        ...ALIGN.CENTER,
        justifyContent: 'center',
        flexDirection: 'column',
        ...MARGIN.F_FORM,
        width: '100%'


    },
    text: {
        paddingBottom: 20,
        fontSize: 16,
        ...FONT.MEDIUM

    },
    text1: {
        fontSize: 23,

    }

})

export default useStyles;
