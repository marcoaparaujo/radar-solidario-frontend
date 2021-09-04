//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import useStyles from './styles';

//#endregion

const ModalDonateSuccess = () => {
    const styles = useStyles();
    const { modalConfirmDonateRef } = useFoodStampContext();

    return (
        <Modal ref={modalConfirmDonateRef}>
            <View style={styles.container}>
                <Text style={styles.text}>A seguinte doação foi registrada</Text>
                <Text style={styles.text}>com sucesso</Text>
            </View>
        </Modal>
    );
};

export default ModalDonateSuccess;
