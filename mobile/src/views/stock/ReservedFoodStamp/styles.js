import { StyleSheet } from 'react-native'
import COLOR from '../../../assets/styles/color';
import FONT from '../../../assets/styles/font';
import { useTheme } from 'react-native-elements';

const useStyles = () =>{
    const { theme } = useTheme()

    return StyleSheet.create({
        container: {
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255)'


        },
        secondcontainer: {
            width: '100%',
            alignItems: 'center',
            padding: 10,
        },
        textmeme: {
            ...FONT.BOLD,
            fontSize: 16,
            paddingLeft: 7,
        },
        textdois: {
            fontSize: 20,
            ...FONT.REGULAR,
            justifyContent: 'center',
            color: theme.colors.secondary.dark,
            padding:5,
        },
        button: {
            paddingTop: 20,

        }

    })

}



export default useStyles;
