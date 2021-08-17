//#region Imports

import Button from 'components/Button';
import React, { useRef } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDataViewer from './FoodStampDataViewer';
import useStyles from './styles';
import Modal from 'containers/Modal';
import { useNavigation } from '@react-navigation/native';
import { ROUTE_NAMES } from 'routes/routes';

//#endregion

const FamilySearchContent = ({ data }) => {
    // const ref = useRef(null);
    const styles = useStyles();
    const { navigate } = useNavigation();

    return (
        <View style={styles.container}>
            <FamilyDataViewer label={FAMILY_LABELS.HEAD} field={data[FAMILY_FIELDS.HEAD]} />
            <FamilyDataViewer label={FAMILY_LABELS.CPF} field={data[FAMILY_FIELDS.CPF]} />
            <FamilyDataViewer label={FAMILY_LABELS.NIS} field={data[FAMILY_FIELDS.NIS]} />

            <FamilyDataViewer
                label={ADDRESS_LABELS.THIS}
                field={`${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.STREET]}, ${
                    data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NEIGHBORHOOD]
                } - N°${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NUMBER]}`}
            />

            <FamilyDataViewer label={ADDRESS_LABELS.PHONE} field={data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.PHONE]} />

            <View style={styles.critical}>
                <View style={styles.foodStamp}>
                    <FoodStampDataViewer label='Última cesta recebida: ' data='25/03/2021' />
                    <FoodStampDataViewer label='Próximo recebimento a partir de: ' data='25/04/2021' />
                </View>

                <Button onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.DONATION)}>Doar</Button>
                <Text style={styles.info}>Histórico de doações recebidas</Text>
            </View>
            {/* <Modal style={styles.modal} ref={ref}>
                <View style={styles.mainView}>
                    <View style={styles.aboveView}>
                        <Text style={styles.aboveTextOne}>O prazo para o recebimento da</Text>
                        <Text style={styles.underTextOne}>cesta não foi cumprido</Text>
                    </View>
                    <View style={styles.underView}>
                        <Text style={styles.aboveTextTwo}>Tem certeza que deseja</Text>
                        <Text style={styles.underTextTwo}>prosseguir?</Text>
                    </View>
                </View>

                <Button style={styles.button}>Tenho certeza</Button>
            </Modal> */}
        </View>
    );
};

export default FamilySearchContent;
