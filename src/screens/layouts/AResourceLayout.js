import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Button from '../components/Button';
import ScreenContainer from '../components/ScreenContainer';
import Card from '../components/Card';
import strings from '../strings';
import styles from '../styles';
import Pdf from 'react-native-pdf';

const AResourceLayout = ({onClickBack, source}) =>
(
    <ScreenContainer>
        <>
            <Pdf
                source={source ?? {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true}}
                style={{
                    flex:1,
                    height: 400
                }}
            />
        <Card>
            <Button title={strings.BACK} onPress={onClickBack}/>
        </Card>
        </>
    </ScreenContainer>
)

AResourceLayout.propTypes =
{
    onClickBack: PropTypes.func.isRequired
}
export default AResourceLayout;