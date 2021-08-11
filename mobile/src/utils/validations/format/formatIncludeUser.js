//#region Imports

import AUTHENTICATION_FIELDS from 'utils/constants/fields/authentication';
import CHARITY_FIELDS from 'utils/constants/fields/charity';
import USER_FIELDS from 'utils/constants/fields/user';
import { GENDER_VALUES } from 'utils/constants/types/gender-options';

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
        [USER_FIELDS.GENDER]: GENDER_VALUES[Number(data[USER_FIELDS.GENDER])],
        [CHARITY_FIELDS.THIS]: {
            id: data[CHARITY_FIELDS.THIS]
        }
    };
};

export default formatIncludeUser;
