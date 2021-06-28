//#region Imports

import api from 'services/api';
import ENDPOINT from 'services/endpoint';

//#endregion

export const getFamily = () => api.get(ENDPOINT.FAMILY.GET);
