//#region Imports

import { API_URL } from '@env';
import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINT = {
    BASE: API_URL,
    SECURITY: {
        LOGIN: 'security/login'
    },
    FAMILY: {
        THIS: 'family',
        GET_BY_NIS_OR_CPF: (nisCpf) => `family?${buildQueryParams({ nisCpf })}`
    },
    FOOD_STAMP: {
        THIS: 'food-stamp',
        FIND_ALL_BY_CHARITY_NAME: (name) => `food-stamp?${buildQueryParams({ name })}`
    }
};

export default ENDPOINT;
