//#region Imports

import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import NativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import slsx from 'slsx';
import useStyles from './styles';

//#endregion

const Modal = (
    {
        children,
        title,
        canClose = true,
        onClose,
        animationIn = 'fadeIn',
        animationOut = 'fadeOut',
        isFullView = false,
        ...rest
    },
    ref
) => {
    const styles = useStyles({ hasTitle: title });
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        handle: () => setIsVisible((prevState) => !prevState)
    }));

    const modalStyle = useMemo(
        () =>
            slsx({
                [styles.fullModal]: isFullView
            }),
        [styles, isFullView]
    );

    const containerStyle = useMemo(
        () =>
            slsx(styles.container, {
                [styles.radius]: !isFullView
            }),
        [styles, isFullView]
    );

    const headerStyle = useMemo(
        () =>
            slsx(styles.header, {
                [styles.alignLeft]: isFullView,
                [styles.alignRight]: !isFullView
            }),
        [styles, isFullView]
    );

    const icon = useMemo(() => (isFullView ? 'arrow-left' : 'times'), [isFullView]);

    return (
        <NativeModal
            style={modalStyle}
            title={title}
            isVisible={isVisible}
            animationIn={animationIn}
            animationOut={animationOut}
            onDismiss={() => onClose && onClose()}
            onBackdropPress={() => setIsVisible(false)}
            {...rest}
        >
            <View style={containerStyle}>
                {(canClose || title) && (
                    <View style={styles.headerStyle}>
                        {canClose && <Icon name={icon} style={styles.backIcon} onPress={() => setIsVisible(false)} />}
                        {title && <Text style={styles.title}>{title}</Text>}
                    </View>
                )}
                {children}
            </View>
        </NativeModal>
    );
};

export default forwardRef(Modal);
