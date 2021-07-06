import { StyleSheet } from 'react-native';
const useStyles = () =>
    StyleSheet.create({
    container: {
        flex: 1,

    },
    data: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20
    },
    last: {
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
    }



})
export default useStyles;
