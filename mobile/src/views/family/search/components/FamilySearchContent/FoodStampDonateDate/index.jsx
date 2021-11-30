//#region Imports

import Button from 'components/Button';
import moment from 'moment';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import DONATE_FIELDS from 'utils/constants/fields/donate';
import FoodStampDataViewer from '../FoodStampDataViewer';
import FoodStampDonateDateViewer from './FoodStampDonateDateViewer';
import useStyles from './styles';

//#endregion

const FoodStampDonateDate = ({ data, navigate }) => {
    const styles = useStyles();
    const { modalConfirmDonateRef } = useFoodStampContext();

    const isValidDonateDataRange = useMemo(() => {
        if (!data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.LAST_DONATE_DATE]) {
            return true;
        }

        const last = moment(data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.LAST_DONATE_DATE], 'dd/MM/yyyy').add(
            1,
            'month'
        );

        const next = moment(data[DONATE_FIELDS.DONATE_PREVISION][DONATE_FIELDS.NEXT_DONATE_DATE], 'dd/MM/yyyy');
        return next.diff(last, 'days') > 0;
    }, [data]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
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

            <Button onPress={() => (isValidDonateDataRange ? navigate() : modalConfirmDonateRef.current.show())}>
                Doar
            </Button>
        </View>
    );
};

export default FoodStampDonateDate;
