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

        text: {
            ...FONT.BOLD,
            fontSize: 16,
            paddingLeft: 7,
        },

    })

}



export default useStyles;
