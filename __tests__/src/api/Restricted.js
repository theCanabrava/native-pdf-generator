import Restricted from '../../../src/api/Restricted';

describe('Restricted methods', () =>
{
    it('Gets restricted content', async () =>
    {
        const response = await Restricted.get('B');
        expect(response.data.title).toBe('Conteúdo exclusivo para usuário B')
    })
})