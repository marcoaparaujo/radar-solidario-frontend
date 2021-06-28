//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const postLogin = (data) => api.post(ENDPOINT.SECURITY.LOGIN, data);
