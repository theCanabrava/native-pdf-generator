import appleAndroidSignIn from '../../../src/federated/appleAndroidSignIn';
import { appleAuthAndroid } from '@invertase/react-native-apple-authentication';

describe('Android apple sign in', () =>
{
    it('Logs in with android', async() =>
    {
        const response = await appleAndroidSignIn();
        expect(response).toBe('token');
    });

    it('Does not log in whithout response', async() =>
    {
        appleAuthAndroid.responseState = undefined;
        const response = await appleAndroidSignIn();
        expect(response).toBe(undefined);
        appleAuthAndroid.responseState = {id_token: 'token'};
    })

    it('Throws on failed attempt', async() =>
    {
        appleAuthAndroid.breaks = true;
        try
        {
            await appleAndroidSignIn();
            expect(true).toBe(false);
        }
        catch{}
    });

    it('Does not throw on unconfigured error', async () =>
    {
       appleAuthAndroid.error = new Error(appleAuthAndroid.Error.NOT_CONFIGURED)
       const response = await appleAndroidSignIn();
       expect(response).toBe(undefined);
    });

    it('Does not throw on sign in failed error', async () =>
    {
       appleAuthAndroid.error = new Error(appleAuthAndroid.Error.SIGNIN_FAILED)
       const response = await appleAndroidSignIn();
       expect(response).toBe(undefined);
    });

    it('Does not throw on sign in canceled error', async () =>
    {
       appleAuthAndroid.error = new Error(appleAuthAndroid.Error.SIGNIN_CANCELLED)
       const response = await appleAndroidSignIn();
       expect(response).toBe(undefined);
    });
})