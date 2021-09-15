//#region Imports
import Modal from 'containers/Modal';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { FamilyContextProvider } from 'storages/family/context';
import { FormContextProvider } from 'storages/form/context';
import useStyles from './styles';

//#endregion

const Content = () => {
    const modalRef = useRef(null);
    const styles = useStyles();
    return (
        <View style={styles.container}>
            <View>
                <Text>20/07/2021 ás 14:32</Text>
            </View>
            <View style={styles.rowDirection}>
                <Text style={styles.text}>Doada</Text>
                <Button
                    style={styles.button}
                    title='Test Button'
                    onPress={() => modalRef.current && modalRef.current.show()}
                />
            </View>
            <View></View>
            <Modal style={styles.modal} ref={modalRef}>
                <View>
                    <View>
                        <Text style={styles.text}>Mais Informações</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.underText}>Doada 1 cesta de 04kg</Text>
                        <Text style={styles.underText}>No dia 20 de Abril de 2021 ás 14:54</Text>
                        <Text style={styles.underText}>Para o CPF 111.222.333-45</Text>
                        <Text style={styles.underText}>Por Jailson Mendes</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const HistoricalDonateBoards = ({ children }) => (
    <FamilyContextProvider>
        <FormContextProvider>
            <Content>{children}</Content>
        </FormContextProvider>
    </FamilyContextProvider>
);

export default HistoricalDonateBoards;
