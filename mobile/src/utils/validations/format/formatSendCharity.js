//#region Imports

import CHARITY_FIELDS from 'utils/constants/fields/charity';

//#endregion

const formatSendCharity = (data, charity) => ({
    ...data,
    [CHARITY_FIELDS.THIS]: {
        id: charity.id
    }
});

export default formatSendCharity;
