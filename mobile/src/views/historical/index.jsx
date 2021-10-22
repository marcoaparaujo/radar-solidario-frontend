//#region Imports

import React, { useEffect, useRef } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import InfoCard from 'views/stock/components/InfoCard';
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

                <View>
                    <Text style={styles.charityName}>{charity.name}</Text>
                    <Text>{charity.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button buttonStyle={styles.donateButton} title={'Doação'} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button buttonStyle={styles.reservedButton} title={'Reservado'} />
                    </View>
                </View>

                <FlatList
                    data={foodStamps}
                    onEndReachedThreshold={0.1}
                    keyExtractor={(item) => item.id}
                    onEndReached={() => fetch(pagination.page + 1)}
                    renderItem={({ item, index }) => (
                        <InfoCard
                            key={index}
                            date={item.date}
                            name={item.weight}
                            show={modalRef.current && modalRef.current.show()}
                        />
                    )}
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
