//#region Imports
import React, { useRef } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import useFamilyContext, { FamilyContextProvider } from 'storages/family/context';
import { FormContextProvider } from 'storages/form/context';
import useStyles from './styles';
import Modal from 'containers/Modal';
import IconButton from 'components/IconButton';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import HistoricalModal from '../HistoricalModal';

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
                <Text style={styles.secondText}>01 cesta - 04kg</Text>
                <View style={styles.buttonPadding}>
                    <Icon
                        name='ellipsis-h'
                        type='font-awesome'
                        style={styles.button}
                        onPress={() => modalRef.current && modalRef.current.show()}
                    />
                </View>
            </View>
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
