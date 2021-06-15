import { StyleSheet } from 'react-native';
import ALIGN from 'assets/styles/align';


const useStyles = () =>
    StyleSheet.create({
        justifyContent: "center",
        flex: 1,
        flexDirection: "collumn",

        ...ALIGN.CENTER,




    });


export default useStyles;
