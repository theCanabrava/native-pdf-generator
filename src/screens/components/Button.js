import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TouchableNativeFeedback, Text, Platform, ActivityIndicator } from 'react-native';
import styles from '../styles'

const Button = ({title, onPress, loading}) =>
{
    if(loading)
    {
        const disabledButton =
        ( 
            <View style={styles.button}>
                <ActivityIndicator color='white'/>
            </View>
        )
        return disabledButton;
    }

    const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const button =
    (
        
        <Touchable onPress={onPress}>
            <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {title}
                    </Text>
            </View>
        </Touchable>
    )

    return button;
}

Button.propTypes =
{
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    loading: PropTypes.bool
}
export default Button;