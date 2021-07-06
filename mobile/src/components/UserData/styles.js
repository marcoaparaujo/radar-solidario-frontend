import FONT from 'assets/styles/font';
import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';
const useStyles = () =>
    StyleSheet.create({
    text: {
        fontSize: 16,
        ...FONT.BOLD,
        marginRight: 3,
        marginTop: 3,


    },
    field: {
        fontSize: 16,


    },
    space: {
        display: 'flex',
        flexDirection: 'row',

     },


})
export default useStyles;
