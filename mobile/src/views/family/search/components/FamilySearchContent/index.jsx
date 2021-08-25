//#region Imports

import { useNavigation } from '@react-navigation/native';
import Button from 'components/Button';
import moment from 'moment';
import React, { useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ROUTE_NAMES } from 'routes/routes';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import DONATE_FIELDS from 'utils/constants/fields/donate';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDataViewer from './FoodStampDataViewer';
import FoodStampDonateDateViewer from './FoodStampDonateDateViewer';
import ModalDonateWarning from './ModalDonateWarning';
import useStyles from './styles';

//#endregion

const FamilySearchContent = ({ data }) => {
    const modalRef = useRef(null);

    const styles = useStyles();
    const { navigate } = useNavigation();

    const isValidDonateDataRange = useMemo(() => {
        const last = moment(data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.LAST_DONATE_DATE], 'dd/MM/yyyy').add(
            1,
            'month'
        );

        const next = moment(data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.NEXT_DONATE_DATE], 'dd/MM/yyyy');
        return next.diff(last, 'days') <= 0;
    }, [data]);

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
                    <FoodStampDataViewer
                        label='Última cesta recebida: '
                        data={data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.LAST_DONATE_DATE]}
                    />

                    <FoodStampDonateDateViewer
                        label='Próximo recebimento a partir de: '
                        isValidDonateDataRange={isValidDonateDataRange}
                        data={data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.NEXT_DONATE_DATE]}
                    />
                </View>

                <Button onPress={() => navigate(ROUTE_NAMES.FOOD_STAMP.DONATION)}>Doar</Button>
                <Text style={styles.info}>Histórico de doações recebidas</Text>
            </View>

            <ModalDonateWarning modalRef={modalRef} />
        </View>
    );
};

export default FamilySearchContent;
