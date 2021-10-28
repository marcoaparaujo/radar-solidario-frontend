//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

//#endregion

const StockModal = ({ modalRef }) => {
    return (
        <Modal ref={modalRef}>
            <View>
                <View>
                    <Text>Mais Informações</Text>
                </View>

                <View>
                    <Text>Doada 1 cesta de 04kg</Text>
                    <Text>No dia 20 de Abril de 2021 ás 14:54</Text>
                    <Text>Para o CPF 111.222.333-45</Text>
                    <Text>Por Jailson Mendes</Text>
                </View>
            </View>
        </Modal>
    );
};

export default StockModal;
