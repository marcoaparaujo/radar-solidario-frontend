import COLOR from 'assets/styles/color';
import React, { Fragment, useState } from 'react';
import { ButtonGroup } from 'react-native-elements';
import useStyles from './styles';

const KeyButton = () => {
    const buttons = ['Masculino', 'Feminino', 'Outro'];
    const [selected, setSelected] = useState(null);

    return (
        <Fragment>
            <ButtonGroup
                selectedIndex={selected}
                onPress={(selectedIndex) => setSelected(selectedIndex)}
                buttons={buttons}
            />
        </Fragment>
    );
};

export default KeyButton;
