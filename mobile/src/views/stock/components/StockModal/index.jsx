//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const StockModal = ({ modalRef }) => {
    const styles = useStyles();
    return (
        <Modal title={'Mais Informações'} ref={modalRef}>
            <View style={styles.container}>
                <Text>Doada 1 cesta de 04kg</Text>
                <Text>No dia 20 de Abril de 2021 ás 14:54</Text>
                <Text>Para o CPF 111.222.333-45</Text>
                <Text>Por Jailson Mendes</Text>
            </View>
        </Modal>
    );
};

export default StockModal;
