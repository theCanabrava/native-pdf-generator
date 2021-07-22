export const appleAuth =
{
    breaks: false,
    Operation: 
    {
        LOGIN: 'LOGIN'
    },
    Scope:
    {
        EMAIL: 'email',
        FULL_NAME: 'full_name'
    },
    State:
    {
        AUTHORIZED: 'a'
    },

    performRequest: () => 
    {
        if(appleAuth.breaks) throw new Error('');
        else return (
        {
            user: {},
            identityToken: 'token'
        })
    },
    getCredentialStateForUser: () => 'a'
}

export const appleAuthAndroid =
{
    breaks: false,
    error: new Error('Default error'),
    configure: () => {},
    signIn: () => 
    {
        if(appleAuthAndroid.breaks) throw(appleAuthAndroid.error);
        else return appleAuthAndroid.responseState;
    },
    responseState: {id_token: 'token'},
    Error:
    {
        NOT_CONFIGURED: 'NOT_CONFIGURED',
        SIGNIN_FAILED: 'SIGNIN_FAILED',
        SIGNIN_CANCELLED: 'SIGNIN_CANCELLED'
    }
}

export const AppleButton = () => null;
