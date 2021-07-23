import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import strings from '../strings';

const BResourceLayout = ({title, onClickBack}) =>
(
    <ScreenContainer>
        <Card>
            <Text>
                {title}
            </Text>
            <Button title={strings.BACK} onPress={onClickBack}/>
        </Card>
    </ScreenContainer>
)

BResourceLayout.propTypes =
{
    title: PropTypes.string,
    onClickBack: PropTypes.func.isRequired
}

export default BResourceLayout;