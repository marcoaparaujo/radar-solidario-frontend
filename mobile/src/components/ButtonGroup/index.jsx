import React, { Fragment } from 'react';
import { ButtonGroup } from 'react-native-elements';

const KeyButton = () => {
    const buttons = ['Masculino', 'Feminino', 'Outro'];

    return (
        <Fragment>
            <ButtonGroup buttons={buttons} />
        </Fragment>
    );
};

export default KeyButton;
