import React, {useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import HomeLayout from './layouts/HomeLayout';
import strings from './strings';
import NavigationProps from './proptypes/NavigationProps';

const HomeContainer = ({navigation}) =>
{
    const auth = useContext(AuthContext);
    
    const allowances =
    {
        A: auth.authType === 'A',
        B: auth.authType === 'B',
    }

    const screen =
    (
        <HomeLayout 
            allowances={allowances}
            onClickA={() => navigation.navigate(strings.ROUTES.a)}
            onClickB={() => navigation.navigate(strings.ROUTES.b)}
        />
    )

    return screen;
}

HomeContainer.propTypes = NavigationProps;

export default HomeContainer;