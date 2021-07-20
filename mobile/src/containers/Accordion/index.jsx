//#region Imports

import React, { Fragment, useState } from 'react';
import { ListItem, Text } from 'react-native-elements';
import useStyles from './styles';

//#endregion

const Accordion = ({ label, children }) => {
    const styles = useStyles();
    const [expanded, setExpanded] = useState(false);

    return (
        <ListItem.Accordion
            isExpanded={expanded}
            style={styles.accordion}
            containerStyle={styles.container}
            onPress={() => setExpanded((prevState) => !prevState)}
            content={
                <ListItem.Content>
                    <Text style={styles.title}>{label}</Text>
                </ListItem.Content>
            }
        >
            <Fragment>
                {expanded && (
                    <ListItem containerStyle={styles.container}>
                        <ListItem.Content>{children}</ListItem.Content>
                    </ListItem>
                )}
            </Fragment>
        </ListItem.Accordion>
    );
};

export default Accordion;
