//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import Modal from 'containers/Modal';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import useFoodStampContext from 'storages/food-stamp/context';
import useStyles from './styles';

//#endregion

const ModalDonateWarning = () => {
    const styles = useStyles();

    const { navigate } = useNavigation();
    const { modalConfirmDonateRef } = useFoodStampContext();

    const beforeNavigate = useCallback(() => {
        modalConfirmDonateRef.current && modalConfirmDonateRef.current.hide();
        navigate(ROUTE_NAMES.FOOD_STAMP.DONATION);
    }, [modalConfirmDonateRef]);

    return (
        <Modal ref={modalConfirmDonateRef}>
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

            <Button style={styles.button} onPress={() => beforeNavigate()}>
                Tenho certeza
            </Button>
        </Modal>
    );
};

export default ModalDonateWarning;
