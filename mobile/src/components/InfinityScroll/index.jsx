//#region Imports

import React from 'react';
import { FlatList } from 'react-native';
import InfoCard from '../InfoCard';
import useStyles from './styles';

//#endregion

const InfinityScroll = ({ modalRef, data, dateProp, nameProp, fetch }) => {
    const styles = useStyles();

    return (
        <FlatList
            data={data}
            style={styles.flatList}
            onEndReachedThreshold={0.1}
            onEndReached={() => fetch()}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainer}
            renderItem={({ item, index }) => (
                <InfoCard
                    key={index}
                    date={item[dateProp]}
                    name={item[nameProp]}
                    show={modalRef.current && modalRef.current.show}
                />
            )}
        />
    );
};

export default InfinityScroll;
