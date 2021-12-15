//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import ADDRESS_FIELDS from 'utils/constants/fields/address';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import useStyles from './styles';

//#endregion

const StockModal = ({ modalRef }) => {
    const styles = useStyles();

    const { foodStamp } = useFoodStampContext();
    console.log(foodStamp);
    return (
        <Modal ref={modalRef} title='Mais Informações'>
            {foodStamp && (
                <>
                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Text style={styles.title}>Entidade:</Text>
                            <Text style={styles.text}>{foodStamp[CHARITY_FIELDS.THIS][CHARITY_FIELDS.NAME]}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>Telefone:</Text>
                            <Text style={styles.text}>
                                {foodStamp[CHARITY_FIELDS.THIS][ADDRESS_FIELDS.THIS][ADDRESS_FIELDS.PHONE]}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.container}>
                        <View style={styles.content}>
                            <Text style={styles.title}>Data da doação:</Text>
                            <Text style={styles.text}>{foodStamp[FOOD_STAMP_FIELDS.DATE]}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>Quantidade:</Text>
                            <Text style={styles.text}>{foodStamp[FOOD_STAMP_FIELDS.LENGTH]}</Text>
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>Peso:</Text>
                            <Text style={styles.text}>{foodStamp[FOOD_STAMP_FIELDS.WEIGHT]}</Text>
                        </View>
                    </View>
                </>
            )}
        </Modal>
    );
};

export default StockModal;
