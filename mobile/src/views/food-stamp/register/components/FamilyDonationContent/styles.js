import { StyleSheet } from 'react-native';

const useStyles = () =>
    StyleSheet.create({
        container: {
            width: '100%',
            paddingBottom: 100
        },
        content: {
            flexDirection: 'row'
        },
        button: {
            padding: 20
        }
    });

export default useStyles;
