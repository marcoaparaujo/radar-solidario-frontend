import React, { Fragment } from 'react';
import { View } from 'react-native';
import FAMILY_FIELDS from 'utils/constants/fields/family';
import { Text } from 'react-native-elements';
import FAMILY_LABELS from '../../../utils/constants/labels/family';
import ADDRESS_LABELS from 'utils/constants/labels/address';
import ADDRESS_FIELDS from '../../../utils/constants/fields/address';

const UserData = ({ family }) => {
    return (
        <Fragment>
            <View>
                <Text>{FAMILY_LABELS.HEAD}</Text>
                <Text>{family[FAMILY_FIELDS.HEAD]}</Text>

                <Text>{FAMILY_LABELS.CPF}</Text>
                <Text>{family[FAMILY_FIELDS.CPF]}</Text>

                <Text>{ADDRESS_LABELS.THIS}</Text>
                <Text>
                    {`${family[ADDRESS_FIELDS.STREET]}, ${family[ADDRESS_FIELDS.NEIGHBORHOOD]} - N°${
                        family[ADDRESS_FIELDS.NUMBER]
                    } `}
                </Text>
            </View>
        </Fragment>
    );
};

export default UserData;
