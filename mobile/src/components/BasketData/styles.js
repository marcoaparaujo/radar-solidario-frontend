import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
const useStyles = () =>
    StyleSheet.create({
    container: {
        marginTop: 20
    },
    text: {
        fontSize: 18,
        ...FONT.BOLD,
    },
    label: {
        fontSize: 22,
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }


})
export default useStyles;
