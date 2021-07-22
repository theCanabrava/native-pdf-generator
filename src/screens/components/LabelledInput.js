import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles';

const LabelledInput = React.forwardRef((props, ref) =>
(   
    <View style={styles.input}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
            style={styles.field}
            ref={ref}
            {...props}
        />
    </View>
));

LabelledInput.propTypes =
{
    label: PropTypes.string.isRequired
}
export default LabelledInput;