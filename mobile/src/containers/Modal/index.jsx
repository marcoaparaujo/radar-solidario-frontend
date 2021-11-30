//#region Imports

import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import NativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';

//#endregion

const Modal = (
    { title, onClose, children, canClose = true, animationIn = 'fadeIn', animationOut = 'fadeOut', ...rest },
    ref
) => {
    const styles = useStyles({ hasTitle: title });
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        show: () => setIsVisible(true),
        hide: () => setIsVisible(false),
        handle: () => setIsVisible((prevState) => !prevState)
    }));

    const containerStyle = StyleSheet.compose(styles.container, styles.radius);

    const headerStyle = StyleSheet.compose(styles.header, styles.alignRight);

    return (
        <NativeModal
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
                    <View style={headerStyle}>
                        {title && <Text style={styles.title}>{title}</Text>}
                        {canClose && <Icon name='times' style={styles.backIcon} onPress={() => setIsVisible(false)} />}
                    </View>
                )}
                {children}
            </View>
        </NativeModal>
    );
};

export default forwardRef(Modal);
