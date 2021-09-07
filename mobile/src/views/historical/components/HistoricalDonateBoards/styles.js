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
            padding: 10,
            width: 250
        },
        rowDirection: {
            flexDirection: 'row',
        },
        text:{
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM,
            ...ALIGN.CENTER,

        },
        button:{
            width: 50,
            borderRadius: 6,
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
