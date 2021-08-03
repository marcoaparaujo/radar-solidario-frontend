import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';
import MARGIN from 'assets/styles/margin';
const useStyles = () =>
    StyleSheet.create({
        container: {
            justifyContent: 'center'
        },
        text: {
            alignItems: 'center'
        }
    });

export default useStyles;
