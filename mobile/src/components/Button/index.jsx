import React from 'react';
import { Button as ButtonElement } from 'react-native-elements';

const Button = ({ isLoading, isDisabled, title, children, ...rest }) => (
    <ButtonElement loading={isLoading} disabled={isLoading || isDisabled} title={title || children} {...rest} />
);

export default Button;
