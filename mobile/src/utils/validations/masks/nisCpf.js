//#region Imports

import maxLength from './maxLength';
import nis from './nis';

//#endregion

const cpf = (value) => {
    value = value.replace(/[^\d|\.|\-]/g, '');
    value = maxLength(value, 14);

    value = value.replace(/(\d{3})(\d{1,3})/g, '$1.$2');
    value = value.replace(/(\d{3})\.(\d{3})\.(\d{3})\.(\d{1,2})/g, '$1.$2.$3-$4');

    return value;
};

const nisCpf = (value) => (String(value).includes('.') ? cpf(value) : nis(value));

export default nisCpf;
