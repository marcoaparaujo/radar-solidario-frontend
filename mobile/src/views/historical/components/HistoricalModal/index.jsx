//#region Imports

import Modal from 'containers/Modal';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useFoodStampContext from 'storages/food-stamp/context';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import USER_FIELDS from 'utils/constants/fields/user';
import useStyles from './styles';

//#endregion

const HistoricalModal = ({ modalRef }) => {
    const styles = useStyles();

    const { foodStamp } = useFoodStampContext();

    return (
        <Modal ref={modalRef} title='Mais Informações'>
            {foodStamp && (
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>Data da doação:</Text>
                        <Text style={styles.text}>{foodStamp[FOOD_STAMP_FIELDS.DATE]}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>Doador:</Text>
                        <Text style={styles.text}>{foodStamp[USER_FIELDS.THIS][USER_FIELDS.NAME]}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>Titular:</Text>
                        <Text style={styles.text}>{foodStamp[FAMILY_FIELDS.THIS][FAMILY_FIELDS.HEAD]}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>CPF:</Text>
                        <Text style={styles.text}>{foodStamp[FAMILY_FIELDS.THIS][FAMILY_FIELDS.CPF]}</Text>
                    </View>

                    <View style={styles.content}>
                        <Text style={styles.title}>NIS:</Text>
                        <Text style={styles.text}>{foodStamp[FAMILY_FIELDS.THIS][FAMILY_FIELDS.NIS]}</Text>
                    </View>
                </View>
            )}
        </Modal>
    );
};

export default HistoricalModal;
