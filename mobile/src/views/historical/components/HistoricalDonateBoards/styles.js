//#region Imports


import { StyleSheet } from 'react-native';
import FONT from './../../../../assets/styles/font';


//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            flexDirection: 'column',
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'grey',
            padding: 10
        },
        text:{
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM
        },


    })

export default useStyles
