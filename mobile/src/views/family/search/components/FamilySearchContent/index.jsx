//#region Imports

import React, { useMemo } from 'react';
import { View } from 'react-native';
import { DonateContextProvider } from 'storages/donate/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import FAMILY_LABELS from 'utils/constants/labels/family';
import FamilyDataViewer from './FamilyDataViewer';
import FoodStampDonateDate from './FoodStampDonateDate';
import ModalDonateWarning from './ModalDonateWarning';
import useStyles from './styles';

//#endregion

const Content = ({ data }) => {
    const styles = useStyles();

    const address = useMemo(
        () =>
            `${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.STREET]}, ${
                data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NEIGHBORHOOD]
            } - N°${data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.NUMBER]}`,
        [data]
    );

    return (
        <View style={styles.container}>
            <FamilyDataViewer label={FAMILY_LABELS.HEAD} field={data[FAMILY_FIELDS.HEAD]} />
            <FamilyDataViewer label={FAMILY_LABELS.CPF} field={data[FAMILY_FIELDS.CPF]} />
            <FamilyDataViewer label={FAMILY_LABELS.NIS} field={data[FAMILY_FIELDS.NIS]} />

            <FamilyDataViewer label={ADDRESS_LABELS.THIS} field={address} />
            <FamilyDataViewer label={ADDRESS_LABELS.PHONE} field={data[ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.PHONE]} />

            <FoodStampDonateDate data={data} />

            <ModalDonateWarning />
        </View>
    );
};

const FamilySearchContent = ({ data }) => (
    <DonateContextProvider>
        <Content data={data} />
    </DonateContextProvider>
);

export default FamilySearchContent;
