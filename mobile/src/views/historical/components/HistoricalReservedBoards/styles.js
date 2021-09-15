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
            width: 300
        },
        rowDirection: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        text:{
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM,
            ...ALIGN.CENTER,


        },
        buttonCenter:{
            justifyContent: 'center'
        },
        button:{
            width: 35,
            padding: 3,
            borderRadius: 6,
            backgroundColor: '#40E0D0',
            marginTop: 10,
        },
        info:{
            padding: 15,
        },
        underText: {
            fontSize: 15,
            ...ALIGN.CENTER,
            padding: 4

        },
        secondText: {
            fontSize: 18,
            justifyContent: 'center',
            marginTop: 10,
            paddingHorizontal: 12
        }


    })

export default useStyles
