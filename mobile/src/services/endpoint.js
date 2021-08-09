//#region Imports

import { API_URL } from '@env';
import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINT = {
    // BASE: 'http://{{SEU_IP_AQUI}}:8877',
    BASE: API_URL,
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
    FOOD_STAMP: {
        THIS: 'food-stamp',
        FIND_ALL_BY_CHARITY_NAME: (name) => `food-stamp?${buildQueryParams({ name })}`
    }
};

export default ENDPOINT;
