//#region Imports

import onlyNumber from './onlyNumber';

//#endregion

const max = (value, length) => {
    value = onlyNumber(value);
    return value > length ? length : value;
};

export default max;
