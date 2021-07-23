import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import strings from '../strings';

const HomeLayout = ({allowances, onClickA, onClickB}) =>
(
    <ScreenContainer>
        {allowances.A && <Button title={strings.EXCLUSIVE_A} onPress={onClickA}/>}
        {allowances.B && <Button title={strings.EXCLUSIVE_B} onPress={onClickB}/>}
    </ScreenContainer>
)

HomeLayout.propTypes =
{
    allowances: PropTypes.shape(
        {
            A: PropTypes.bool,
            B: PropTypes.bool
        }
    ),
    onClickA: PropTypes.func.isRequired,
    onClickB: PropTypes.func.isRequired
}

export default HomeLayout;