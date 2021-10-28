//#region Imports

import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import InfoCard from '../InfoCard';
import InfinityScrollLoader from './InfinityScrollLoader';
import useStyles from './styles';

//#endregion

const InfinityScroll = ({ modalRef, data, dateProp, nameProp, fetch, refresh, requestState }) => {
    const styles = useStyles();
    const [isRefreshing, setIsRefreshing] = useState(false);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await refresh();

        setIsRefreshing(false);
    }, [refresh, setIsRefreshing]);

    return (
        <FlatList
            data={data}
            style={styles.flatList}
            onEndReachedThreshold={0.1}
            onEndReached={() => fetch()}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.contentContainer}
            ListFooterComponent={requestState.isLoading && <InfinityScrollLoader />}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => handleRefresh()} />}
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
