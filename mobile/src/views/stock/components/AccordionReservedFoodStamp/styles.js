import FONT from 'assets/styles/font';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-elements';

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        text: {
            fontSize: 20,
            ...FONT.REGULAR,
            justifyContent: 'center',
            color: theme.colors.secondary.dark,
            padding: 5
        },
        button: {
            paddingTop: 20
        }
    });
};

export default useStyles;
