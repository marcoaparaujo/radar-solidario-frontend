//#region Imports

import { StyleSheet } from 'react-native';

//#endregion

const useStyles = () =>
    StyleSheet.create({
        container: {
            margin: 20,
            flexDirection: 'row'
        },
        icon: {
            alignItems: 'flex-start',
            paddingTop: 10
        },
        iconStyle: {
            paddingTop: 10,
            fontSize: 25,
            color: 'black'
        },
        info: {
            flexDirection: 'column',
            margin: 10,
            paddingLeft: 7
        },
        text: {
            fontSize: 20,
            color: 'black'
        },
        infoText: {
            fontSize: 17,
            color: 'black'
        }
    });

export default useStyles;
