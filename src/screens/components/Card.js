import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../styles';

const Card = ({children}) =>
(
    <View style={styles.card}>
        {children}
    </View>
)

Card.propTypes =
{
    children: PropTypes.element.isRequired
}
export default Card;