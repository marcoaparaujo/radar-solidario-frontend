import { StyleSheet } from 'react-native';
const useStyles = () =>
    StyleSheet.create({
        container: {
            justifyContent: 'space-around'
        },
        text: {
            alignItems: 'center'
        },
        button: {
            padding: 20
        }
    });

export default useStyles;
