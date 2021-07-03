//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const postFamily = (data) => api.post(ENDPOINT.FAMILY.INCLUDE, data);
