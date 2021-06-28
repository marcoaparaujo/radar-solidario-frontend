import ALIGN from 'assets/styles/align';
import { StyleSheet } from 'react-native';

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
            paddingLeft: 30,
            paddingRight: 30,
            ...ALIGN.CENTER,
            flexDirection: 'column',
            justifyContent: 'space-between'

        },


    })

export default useStyles;
