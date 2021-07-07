//#region Imports

import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDataViewer from './FoodStampDataViewer';
import useStyles from './styles';

//#endregion

const FamilySearchContent = ({ data }) => {
    const styles = useStyles();

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

                <Button onPress={() => {}}>Doar</Button>
                <Text style={styles.info}>Histórico de doações recebidas</Text>
            </View>
        </View>
    );
};

export default FamilySearchContent;
