import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import LogoutLayout from './layouts/LogoutLayout';
import NavigationProps from './proptypes/NavigationProps';
import strings from './strings';

const LogoutContainer = ({navigation}) =>
{
    const auth = useContext(AuthContext);
    return (<LogoutLayout currentToken={auth.token} onLogout={auth.logout} onClickBack={() => navigation.navigate(strings.ROUTES.home)}/>)
}

LogoutContainer.propTypes = NavigationProps;
export default LogoutContainer;