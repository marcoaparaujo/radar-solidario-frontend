//#region Imports

import CHARITY_FIELDS from 'utils/constants/fields/charity';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import FOOD_STAMP_FIELDS from 'utils/constants/fields/food-stamp';
import USER_FIELDS from 'utils/constants/fields/user';

//#endregion

const formatDonate = (data, user, charity, options) => {
    const selectedOption = options.find((option) => option.value === data[FOOD_STAMP_FIELDS.WEIGHT]);

    data = {
        ...data,
        [FOOD_STAMP_FIELDS.WEIGHT]: selectedOption.text
    };

    return {
        [USER_FIELDS.THIS]: { id: user.id },
        [FAMILY_FIELDS.THIS]: { id: family.id },
        [FOOD_STAMP_FIELDS.FOOD_STAMPS]: [data],
        [CHARITY_FIELDS.THIS]: { id: charity.id }
    };
};

export default formatDonate;
