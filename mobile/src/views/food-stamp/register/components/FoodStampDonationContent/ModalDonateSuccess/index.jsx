//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const ModalDonateSuccess = ({ modalRef }) => {
    const styles = useStyles();

    return (
        <Modal ref={modalRef}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>A seguinte doação foi registrada</Text>
                    <Text style={styles.text}>com sucesso</Text>
                </View>
            </View>
        </Modal>
    );
};

export default ModalDonateSuccess;
