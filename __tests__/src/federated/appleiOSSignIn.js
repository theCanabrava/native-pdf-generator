import appleiOSSignIn from '../../../src/federated/appleiOSSignIn';
import { appleAuth } from '@invertase/react-native-apple-authentication';

describe('iOS apple sign in', () =>
{
    it('Logs in with iOS', async() =>
    {
        const response = await appleiOSSignIn();
        expect(response).toBe('token');
    });

    it('Does not log in when unauthorized', async() =>
    {
        appleAuth.State.AUTHORIZED = 'b'
        const response = await appleiOSSignIn();
        expect(response).toBe(undefined);
    });

    it('Throws on failed attempt', async() =>
    {
        appleAuth.breaks = true;
        try
        {
            await appleiOSSignIn();
            expect(true).toBe(false);
        }
        catch{}
    });
})
