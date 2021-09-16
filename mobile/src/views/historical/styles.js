//#region Imports


import { StyleSheet } from 'react-native';
import MARGIN from './../../assets/styles/margin';
import ALIGN from './../../assets/styles/align';
import FONT from './../../assets/styles/font';

//#endregion

const useStyles = () =>
    StyleSheet.create({

        container: {
            ...ALIGN.CENTER,
            ...MARGIN.H_FORM,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        text:{
            fontSize: 20,
            marginTop: 10,
            ...FONT.MEDIUM
        },
        textSpace: {
            padding: 28
        },
        buttonContainer:{
            flexDirection: 'row',

        },
        buttonView:{
            margin:10,

        },
        button:{
            backgroundColor:'#40E0D0',

        }

    })

export default useStyles
