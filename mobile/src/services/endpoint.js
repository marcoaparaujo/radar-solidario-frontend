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
    }
};

export default ENDPOINT;
