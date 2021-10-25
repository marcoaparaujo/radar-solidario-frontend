//#region Imports

import { Dimensions, StyleSheet } from 'react-native';

//#endregion

const { width } = Dimensions.get('screen');

const useStyles = () =>
    StyleSheet.create({
        view: {
            marginTop: 100,
            backgroundColor: 'blue',
            width: width - 80,
            margin: 10,
            height: 200,
            borderRadius: 10
        },
        view2: {
            marginTop: 100,
            backgroundColor: 'red',
            width: width - 80,
            margin: 10,
            height: 200,
            borderRadius: 10
        }
    });

export default useStyles;
