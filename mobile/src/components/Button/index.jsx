import React from 'react';
import { Button as ButtonElement } from 'react-native-elements'
import { TouchableOpacity, Text } from 'react-native';





const Button = ({ isLoading, isDisabled, title, ...rest }) => {

    return (


        <ButtonElement
            //style={ styles.container }
            //containerStyle={containerStyle}
            loading={isLoading}
            disabled={isLoading || isDisabled}
            title={title}
            {...rest}
        />
    )
}
export default Button;
