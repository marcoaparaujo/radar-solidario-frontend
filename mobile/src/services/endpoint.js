//#region Imports

import { API_URL } from '@env';

//#endregion

const ENDPOINT = {
    BASE: API_URL,
    SECURITY: {
        LOGIN: 'security/login'
    },
    FAMILY: {
        GET: 'family',
        INCLUDE: 'family'
    }
};

export default ENDPOINT;
