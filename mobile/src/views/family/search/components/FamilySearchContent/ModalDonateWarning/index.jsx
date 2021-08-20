//#region Imports

import Button from 'components/Button';
import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const ModalDonateWarning = ({ modalRef }) => {
    const styles = useStyles();

    return (
        <Modal ref={modalRef}>
            <View style={styles.container}>
                <View style={styles.topContent}>
                    <Text style={styles.title}>O prazo para o recebimento da</Text>
                    <Text style={styles.title}>cesta não foi cumprido</Text>
                </View>

                <View style={styles.bottomContent}>
                    <Text style={styles.text}>Tem certeza que deseja</Text>
                    <Text style={styles.text}>prosseguir?</Text>
                </View>
            </View>

            <Button style={styles.button}>Tenho certeza</Button>
        </Modal>
    );
};

export default ModalDonateWarning;
