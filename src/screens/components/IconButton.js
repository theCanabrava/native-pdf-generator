import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const IconButton = ({name, onPress}) =>
(
    <TouchableOpacity onPress={onPress}>
        <Icon
            name={name}
            size={25}
            color={'#000'}
        />
    </TouchableOpacity>
)

IconButton.propTypes =
{
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}
export default IconButton;