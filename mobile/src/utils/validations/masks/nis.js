//#region Imports

import maxLength from './maxLength';
import onlyNumber from './onlyNumber';

//#endregion

const nis = (value) => {
    value = onlyNumber(value);
    value = maxLength(value, 11);

    return value;
};

export default nis;
