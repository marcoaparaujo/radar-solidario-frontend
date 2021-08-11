//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import CHARITY_FIELDS from 'utils/constants/fields/charity';

//#endregion

const formatIncludeUser = (data) => {
    const authentication = {
        [AUTHENTICATION_FIELDS.EMAIL]: data[AUTHENTICATION_FIELDS.EMAIL],
        [AUTHENTICATION_FIELDS.PASSWORD]: data[AUTHENTICATION_FIELDS.PASSWORD]
    };

    delete data[AUTHENTICATION_FIELDS.EMAIL];
    delete data[AUTHENTICATION_FIELDS.PASSWORD];

    return {
        ...data,
        authentication,
        [CHARITY_FIELDS.THIS]: {
            id: data[CHARITY_FIELDS.THIS]
        }
    };
};

export default formatIncludeUser;
