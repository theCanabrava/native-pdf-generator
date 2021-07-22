import React, { useContext } from 'react';
import { useEffect } from 'react';
import RestrictedContext from '../contexts/RestrictedContext';
import BResourcePresenter from './layouts/BResourceLayout';
import NavigationProps from './proptypes/NavigationProps';

const BResourceContainer = ({navigation}) =>
{
    let restricted = useContext(RestrictedContext);
    useEffect(() => { restricted.getContent('B');}, []);

    const screen =
    (
        <BResourcePresenter 
            title={restricted.title}
            onClickBack={() => navigation.goBack()}
        />
    )

    return screen;
}

BResourceContainer.propTypes = NavigationProps;
export default BResourceContainer;