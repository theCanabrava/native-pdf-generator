import { appleAuth } from '@invertase/react-native-apple-authentication';

export default async () =>
{
    const appleAuthRequestResponse = await appleAuth.performRequest(
        {
            requestedOperation: appleAuth.Operation.LOGIN,
            requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
        }
    )
    const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

    if(credentialState === appleAuth.State.AUTHORIZED) return appleAuthRequestResponse.identityToken;
}