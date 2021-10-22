//#region Imports

import { API_URL } from '@env';
import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINT = {
    BASE: 'http://localhost:8877',
    // BASE: 'http://192.168.0.107:8877',
    // BASE: API_URL,
    SECURITY: {
        LOGIN: 'security/login'
    },
    USER: {
        THIS: 'user',
        INCLUDE_VOLUNTARY: 'user/voluntary'
    },
    CHARITY: {
        THIS: 'charity',
        FIND_OPTIONS: 'charity/options'
    },
    FAMILY: {
        THIS: 'family',
        FIND_BY_NIS_OR_CPF: (nisCpf) => `family?${buildQueryParams({ nisCpf })}`
    },
    DONATE: {
        THIS: 'donate',
        FIND_ALL_PAGINATED: (page) => `donate?${buildQueryParams({ page })}`
    },
    FOOD_STAMP: {
        THIS: 'food-stamp',
        FIND_OPTIONS: 'food-stamp/options',
        FIND_BY_ID: (id) => `food-stamp?${buildQueryParams({ id })}`,
        FIND_ALL_BY_CHARITY_NAME: (name) => `food-stamp?${buildQueryParams({ name })}`,
        FIND_ALL_BY_IS_ABLE: (page, isAble) => `food-stamp?${buildQueryParams({ page, isAble })}`
    }
};

export default ENDPOINT;
