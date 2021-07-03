import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';
import COLOR from 'assets/styles/color';
import FONT from 'assets/styles/font';

const useStyles = () =>
    StyleSheet.create({

        container: {
            height: '50%',
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        image: {
            width: 150,
            height: 150
        },
        search: {
            height: 50,
            paddingLeft: 50,
            paddingRight: 50,
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderWidth: 1,
            borderRadius: 5,

        },


    })

export default useStyles;
