import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            ...ALIGN.CENTER,
            ...MARGIN.F_FORM,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        text: {
            ...FONT.MEDIUM,
            fontSize: 16,
            paddingBottom: 20,
        },
        text1: {
            fontSize: 23
        }
    });

export default useStyles;
