//#region Imports

import Button from 'components/Button';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import AUTHENTICATION_LABELS from 'utils/constants/labels/authentication';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDataViewer from './FoodStampDataViewer';
import useStyles from './styles';

//#endregion

const family = {
    [FAMILY_FIELDS.HEAD]: 'Fulano',
    [FAMILY_FIELDS.THIS]: 'De tal',
    [FAMILY_FIELDS.CPF]: '2345678999999',
    [FAMILY_FIELDS.NIS]: '99999999999',
    [AUTHENTICATION_FIELDS.EMAIL]: 'gabriel@pf.com',
    [ADDRESS_FIELDS.THIS]: {
        [ADDRESS_FIELDS.STREET]: 'Rua tal de tal',
        [ADDRESS_FIELDS.NEIGHBORHOOD]: 'XDXDXD',
        [ADDRESS_FIELDS.NUMBER]: '777',
        [ADDRESS_FIELDS.PHONE]: '40028922'
    }
};

const FamilySearchContent = ({ family: overMocked }) => {
    const styles = useStyles();

    return (
        <View style={styles.container}>
            <FamilyDataViewer label={FAMILY_LABELS.HEAD} field={family[FAMILY_FIELDS.HEAD]} />
            <FamilyDataViewer label={FAMILY_LABELS.CPF} field={family[FAMILY_FIELDS.CPF]} />
            <FamilyDataViewer label={FAMILY_LABELS.NIS} field={family[FAMILY_FIELDS.NIS]} />

            <FamilyDataViewer
                label={ADDRESS_LABELS.THIS}
                field={`${family[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.STREET]}, ${
                    family[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NEIGHBORHOOD]
                } - N°${family[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NUMBER]}`}
            />

            <FamilyDataViewer label={AUTHENTICATION_LABELS.EMAIL} field={family[AUTHENTICATION_FIELDS.EMAIL]} />
            <FamilyDataViewer label={ADDRESS_LABELS.PHONE} field={family[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.PHONE]} />

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
