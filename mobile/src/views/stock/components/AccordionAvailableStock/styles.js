import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        text: {
            padding: 5,
            fontSize: 20,
            justifyContent: 'center',
            color: theme.colors.secondary.dark,
            ...FONT.REGULAR
        },
        button: {
            paddingTop: 20
        }
    });
};

export default useStyles;
