import ALIGN from 'assets/styles/align';
import FONT from 'assets/styles/font';
import MARGIN from 'assets/styles/margin';
import { StyleSheet } from 'react-native';

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
            ...MARGIN.F_FORM,
            ...ALIGN.CENTER,
        },
        text: {
            fontSize: 16,
            paddingBottom: 20,
            ...FONT.MEDIUM
        },
        text1: {
            fontSize: 23
        }
    });

export default useStyles;
