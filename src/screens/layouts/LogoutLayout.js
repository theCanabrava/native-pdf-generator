import React from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import LabelledInput from '../components/LabelledInput';
import ScreenContainer from '../components/ScreenContainer';
import strings from '../strings';

const LogoutLayout = ({currentToken, onLogout, onClickBack}) =>
(
    <ScreenContainer>
        <LabelledInput
            label='Token atual'
            value={currentToken}
        />
        <Button title={strings.LOGOUT} onPress={onLogout}/>
        <Button title={strings.BACK} onPress={onClickBack}/>
    </ScreenContainer>
)

LogoutLayout.propTypes =
{
    currentToken: PropTypes.string,
    onLogout: PropTypes.func.isRequired,
    onClickBack: PropTypes.func.isRequired
}
export default LogoutLayout;