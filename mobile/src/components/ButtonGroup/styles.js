import { StyleSheet } from 'react-native';
import COLOR from './../../assets/styles/color';

const useStyles = () =>
    StyleSheet.create({
        selectedIndex: {
            color: COLOR.GREY
        },
        text: {
            alignItems: 'center'
        }
    });

export default useStyles;
