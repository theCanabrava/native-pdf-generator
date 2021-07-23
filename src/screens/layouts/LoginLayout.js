import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import { Text, View, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import { AppleButton } from '@invertase/react-native-apple-authentication';

import strings from '../strings';
import styles from '../styles';
import Button from '../components/Button';
import Card from '../components/Card';
import LabelledInput from '../components/LabelledInput';
import ScreenContainer from '../components/ScreenContainer';



const LoginLayout = ({onSubmit, error, loading, onGoogleSignIn, onAppleSignIn}) =>
{
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const passField = useRef();

    const screen =
    (
        <KeyboardAvoidingView
            style={{flex: 1}} 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <ScreenContainer>
                <Card>
                    <LabelledInput
                        value={user}
                        onChangeText={v => setUser(v)}
                        onSubmitEditing={() => passField.current.focus()}
                        label={strings.USER}
                        blurOnSubmit={false}
                        placeholder={'Usuário'}
                    />
                    <LabelledInput
                        value={pass}
                        onChangeText={v => setPass(v)}
                        onSubmitEditing={onSubmit.bind(this, user, pass)}
                        label={strings.PASS}
                        ref={passField}
                        blurOnSubmit={false}
                        placeholder={'Senha'}
                    />
                    <Button
                        loading={loading}
                        title={strings.LOGIN}
                        onPress={onSubmit.bind(this, user, pass)}
                    />
                    {!loading &&
                    <>
                    <View style={styles.googleButton}>
                        <GoogleSigninButton 
                            onPress={onGoogleSignIn}
                        />
                    </View>
                    <View style={styles.appleButton}>
                        <AppleButton
                            buttonStyle={AppleButton.Style.BLACK}
                            buttonType={AppleButton.Type.SIGN_IN}
                            style={{width: 160, height: 45}}
                            onPress={onAppleSignIn}
                        />
                    </View>
                    <Image
                        style={{
                              width: 50,
                              height: 50,
                            }}
                        source={require('../../../assets/images/red.png')}
                    />
                    <Image
                        style={{
                              width: 50,
                              height: 50,
                            }}
                        source={require('../../../assets/images/blue/blue.png')}
                    />
                    </>
                    }
                    {error && 
                    <Text style={styles.errorText}>
                        {error}    
                    </Text>}
                </Card>
            </ScreenContainer>
        </KeyboardAvoidingView>
    )

    return screen;
}

LoginLayout.propTypes =
{
    onSubmit: PropTypes.func.isRequired, 
    error: PropTypes.string, 
    loading: PropTypes.bool, 
    onGoogleSignIn: PropTypes.func.isRequired, 
    nAppleSignIn: PropTypes.func.isRequired
}

export default LoginLayout;