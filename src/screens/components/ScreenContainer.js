import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../styles';

const ScreenContainer = ({children}) =>
(
    <View style={styles.container}>
        {children}
    </View>
)

ScreenContainer.propTypes =
{
    children: PropTypes.element.isRequired
}
export default ScreenContainer;