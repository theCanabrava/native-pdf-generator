import Auth from '../../../src/api/Auth';
import mock from '../../../src/api/client/mock';

describe('Auth methods', () =>
{
    it('Overides authentication token', () =>
    {
        Auth.setToken('sample');
        expect(mock.defaults.headers.common['Authorization']).toBe('Bearer sample');
    })

    it('Logs in', async () =>
    {
        const response = await Auth.login({user: 'A', pass: 'A'});
        expect(response.data.token).toBe('token');
    })

    it('Refreshes token', async () =>
    {
        const response = await Auth.refresh();
        expect(response.data.token).toBe('token');
    })

    it('Throws on broken request', async () =>
    {
        try
        {
            mock.defaults.baseURL = '';
            await Auth.login({user: 'A', pass: 'A'});
            expect(true).toBe(false);
        }
        catch(err)
        {
            expect(mock.defaults.headers.common['Authorization']).toBe("Bearer null");
        }
    })
})