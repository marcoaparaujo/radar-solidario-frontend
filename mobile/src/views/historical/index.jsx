//#region Imports

import InfinityScroll from 'components/InfinityScroll';
import React, { useCallback, useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const modalRef = useRef(null);

    const { charity } = useSystemContext();
    const { donates, pagination, requestState, fetchFindAllDonatesPaginated, setDonatesInfinityPaginated } =
        useFoodStampContext();

    const fetch = useCallback(
        async (page) => {
            if (!pagination.last) {
                const { data } = await fetchFindAllDonatesPaginated(page);
                setDonatesInfinityPaginated(data);
            }
        },
        [pagination, setDonatesInfinityPaginated]
    );

    useEffect(() => {
        (async () => {
            await fetch();
        })();
    }, []);

    return (
        <View style={styles.color}>
            <View style={styles.container}>
                <View style={styles.textSpace}>
                    <Text style={styles.text}>Histórico</Text>
                </View>

                <Text style={styles.charityName}>{charity.name}</Text>

                <InfinityScroll
                    data={donates}
                    dateProp='date'
                    nameProp='weight'
                    modalRef={modalRef}
                    requestState={requestState}
                    fetch={() => fetch(pagination.page + 1)}
                />
            </View>
        </View>
    );
};

const Historical = () => (
    <ScrollView>
        <FormContextProvider>
            <FoodStampContextProvider>
                <Content />
            </FoodStampContextProvider>
        </FormContextProvider>
    </ScrollView>
);

export default Historical;
