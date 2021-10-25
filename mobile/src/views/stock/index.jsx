//#region Imports

import InfinityScroll from 'components/InfinityScroll';
import Modal from 'containers/Modal';
import React, { useEffect, useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import useFoodStampContext, { FoodStampContextProvider } from 'storages/food-stamp/context';
import { FormContextProvider } from 'storages/form/context';
import useSystemContext from 'storages/system/context';
import HorizontalScrollingFilter from '../../components/HorizontalScrollingFilter';
import useStyles from './styles';

//#endregion

const Content = () => {
    const styles = useStyles();
    const modalRef = useRef(null);

    const { charity } = useSystemContext();
    const { foodStamps, pagination, fetchFindAllByIsAble } = useFoodStampContext();

    const fetch = async (page = 0, isAble = true) => {
        if (!pagination.last) {
            await fetchFindAllByIsAble(page, isAble);
        }
    };

    useEffect(() => {
        (async () => {
            await fetch();
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textSpace}>
                <Text style={styles.text}>Estoque</Text>
            </View>

            <View>
                <Text style={styles.text}>{charity.name}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.firstButton} title={'Disponível'} />
                </View>

                <View style={styles.buttonView}>
                    <Button buttonStyle={styles.secondButton} title={'Indisponível'} />
                </View>
            </View>

            <HorizontalScrollingFilter />

            <InfinityScroll
                dateProp='date'
                nameProp='weight'
                data={foodStamps}
                modalRef={modalRef}
                fetch={() => fetch(pagination.page + 1)}
            />

            <Modal ref={modalRef}>
                <View>
                    <View>
                        <Text style={styles.text}>Mais Informações</Text>
                    </View>

                    <View>
                        <Text>Doada 1 cesta de 04kg</Text>
                        <Text>No dia 20 de Abril de 2021 ás 14:54</Text>
                        <Text>Para o CPF 111.222.333-45</Text>
                        <Text>Por Jailson Mendes</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const Stock = () => (
    <ScrollView>
        <FormContextProvider>
            <FoodStampContextProvider>
                <Content />
            </FoodStampContextProvider>
        </FormContextProvider>
    </ScrollView>
);

export default Stock;
