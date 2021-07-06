import React, { Fragment } from 'react';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_FIELDS from '../../../utils/constants/fields/address';
import UserData from './../../../components/UserData/index';
import ADDRESS_LABELS from './../../../utils/constants/labels/address';
import FAMILY_LABELS from './../../../utils/constants/labels/family';
import AUTHENTICATION_FIELDS from './../../../utils/constants/fields/authentication';
import AUTHENTICATION_LABELS from './../../../utils/constants/labels/authentication';
import useStyles from './styles';
import { View } from 'react-native';
import BasketData from 'components/BasketData';
import Button from './../../../components/Button/index';
import { Text } from 'react-native-elements';
const family = {
    [FAMILY_FIELDS.HEAD]: 'Fulano',
    [FAMILY_FIELDS.THIS]: 'De tal',
    [FAMILY_FIELDS.CPF]: '2345678999999',
    [FAMILY_FIELDS.NIS]: '99999999999',
    [ADDRESS_FIELDS.STREET]: 'Rua tal de tal',
    [ADDRESS_FIELDS.NEIGHBORHOOD]: 'XDXDXD',
    [ADDRESS_FIELDS.NUMBER]: '777',
    [ADDRESS_FIELDS.PHONE]: '40028922'
};

const FamilyData = () => {
    const styles = useStyles();
    return (
        <Fragment>
            <View style={styles.container}>
                <UserData label={FAMILY_LABELS.HEAD} field={family[FAMILY_FIELDS.HEAD]} />
                <UserData label={FAMILY_LABELS.CPF} field={family[FAMILY_FIELDS.CPF]} />
                <UserData label={FAMILY_LABELS.NIS} field={family[FAMILY_FIELDS.NIS]} />
                <UserData
                    label={ADDRESS_LABELS.THIS}
                    field={`${family[ADDRESS_FIELDS.STREET]}, ${family[ADDRESS_FIELDS.NEIGHBORHOOD]} - N°${
                        family[ADDRESS_FIELDS.NUMBER]
                    }`}
                />
                <UserData label={AUTHENTICATION_LABELS.EMAIL} field={family[AUTHENTICATION_FIELDS.EMAIL]} />
                <UserData label={ADDRESS_LABELS.PHONE} field={family[ADDRESS_FIELDS.PHONE]} />
                <View style={styles.data}>
                    <BasketData label='Última cesta recebida: ' data='25/03/2021' />
                    <BasketData label='Próximo recebimento a partir de: ' data='25/04/2021' />
                </View>
                <Button style={styles.button}>Doar</Button>
                <Text style={styles.last}>Histórico de doações recebidas</Text>
            </View>
        </Fragment>
    );
};

export default FamilyData;
