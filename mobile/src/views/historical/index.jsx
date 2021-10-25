//#region Imports

import InfinityScroll from 'components/InfinityScroll';
import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const modalRef = useRef(null);

    const { charity } = useSystemContext();
    const { foodStamps, pagination, fetchFindAllPaginated } = useFoodStampContext();

    const fetch = async (page = 0) => {
        if (!pagination.last) {
            await fetchFindAllPaginated(page);
        }
    };

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
                    dateProp='date'
                    nameProp='weight'
                    data={foodStamps}
                    modalRef={modalRef}
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
