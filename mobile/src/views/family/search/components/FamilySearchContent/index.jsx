//#region Imports

import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { ROUTE_NAMES } from 'routes/routes';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDonateDate from './FoodStampDonateDate';
import ModalDonateWarning from './ModalDonateWarning';
import useStyles from './styles';

//#endregion

const FamilySearchContent = ({ data }) => {
    const styles = useStyles();
    const { navigate } = useNavigation();

    const address = useMemo(
        () =>
            `${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.STREET]}, ${
                data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NEIGHBORHOOD]
            } - N°${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NUMBER]}`,
        [data]
    );

    const navigateToDonationPage = useCallback(
        () =>
            navigate(ROUTE_NAMES.FOOD_STAMP.DONATION, {
                family: data
            }),
        [navigate, data]
    );

    return (
        <View style={styles.container}>
            <FamilyDataViewer label={FAMILY_LABELS.HEAD} field={data[FAMILY_FIELDS.HEAD]} />
            <FamilyDataViewer label={FAMILY_LABELS.CPF} field={data[FAMILY_FIELDS.CPF]} />
            <FamilyDataViewer label={FAMILY_LABELS.NIS} field={data[FAMILY_FIELDS.NIS]} />

            <FamilyDataViewer label={ADDRESS_LABELS.THIS} field={address} />
            <FamilyDataViewer label={ADDRESS_LABELS.PHONE} field={data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.PHONE]} />

            <FoodStampDonateDate data={data} navigate={navigateToDonationPage} />
            <ModalDonateWarning navigate={navigateToDonationPage} />
        </View>
    );
};

export default FamilySearchContent;
