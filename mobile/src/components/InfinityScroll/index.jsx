//#region Imports

import React, { useCallback, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import InfinityScrollLoader from './InfinityScrollLoader';
import useStyles from './styles';

//#endregion

const InfinityScroll = ({ render, data, fetch, refresh, isLoading }) => {
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
            renderItem={({ item, index }) => render(item, index)}
            ListFooterComponent={isLoading && <InfinityScrollLoader />}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={() => handleRefresh()} />}
        />
    );
};

export default InfinityScroll;
