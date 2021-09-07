//#region Imports


import { StyleSheet } from 'react-native';
import FONT from './../../../../assets/styles/font';
import ALIGN from './../../../../assets/styles/align';


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
            ...FONT.MEDIUM,
            ...ALIGN.CENTER,

        },
        info:{
            padding: 15,
        },
        underText: {
            fontSize: 15,
            ...ALIGN.CENTER,
            padding: 4

        },


    })

export default useStyles
