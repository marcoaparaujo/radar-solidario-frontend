import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';
import  FONT  from 'assets/styles/font';


const useStyles = () =>{
    const { theme } = useTheme()

    return StyleSheet.create({

        container: {
            width: '100%',
            alignItems: 'center',
            padding: 10,
        },
        text: {
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
