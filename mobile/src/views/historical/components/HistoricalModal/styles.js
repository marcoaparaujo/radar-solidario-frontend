import { StyleSheet } from 'react-native';

const useStyles = () =>
    StyleSheet.create({
        container: {
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5
        }
    });

export default useStyles;
