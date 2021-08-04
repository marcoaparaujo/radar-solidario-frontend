//#region Imports

import SYSTEM_FIELDS from 'utils/constants/fields/system';

//#endregion

const formatSendCharity = (data, charity) => ({
    ...data,
    [SYSTEM_FIELDS.CHARITY]: {
        id: charity.id
    }
});

export default formatSendCharity;
